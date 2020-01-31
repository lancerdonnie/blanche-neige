export const addItemUtil = (state, payload) => {
  const inCart = state.featured.find(item => {
    return item.id === payload.id;
  });
  const i = { ...inCart };
  i.quantity = 1;
  i.selectedSize = payload.size;
  i.choice = payload.choice;
  //is item in cart?
  const c = state.cart.find(item => {
    return item.id === payload.id;
  });
  if (c) {
    const d = state.cart.findIndex(x => {
      return x.id === payload.id;
    });
    const h = [...state.cart];

    h[d].quantity++;
    localStorage.setItem('cart', JSON.stringify(h));
    return h;
  } else {
    console.log('yes');
    const b = [...state.cart, i];
    localStorage.setItem('cart', JSON.stringify(b));
    return b;
  }
};

export const reduceQuantityUtil = (cart, payload) => {
  const h = cart.findIndex(x => {
    return x.id === payload;
  });
  const j = [...cart];
  if (j[h].quantity < 2) {
    const k = j.filter((el, i) => {
      return i !== h;
    });
    localStorage.setItem('cart', JSON.stringify(k));
    return k;
  } else {
    j[h].quantity--;
    localStorage.setItem('cart', JSON.stringify(j));
    return j;
  }
};

export const increaseQuantityUtil = (cart, payload) => {
  const a = cart.findIndex(x => {
    return x.id === payload;
  });
  const g = [...cart];
  g[a].quantity++;
  localStorage.setItem('cart', JSON.stringify(g));
  return g;
};

export const removeItem = payload => {
  const a = localStorage.getItem('cart');
  const b = JSON.parse(a).filter(x => {
    return x.id !== payload;
  });
  localStorage.setItem('cart', JSON.stringify(b));
};
