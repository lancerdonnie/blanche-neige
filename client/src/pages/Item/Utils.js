export const befNext = (array, index) => {
  const a = [...array];
  const b = a.length;
  const arr = [];
  a.forEach((x, i, arra) => {
    if (i === index) {
      if (i - 1 < 0) {
        arr.push(arra[b - 1]);
      } else {
        arr.push(arra[i - 1]);
      }
      if (i + 1 > b - 1) {
        arr.push(arra[0]);
      } else {
        arr.push(arra[i + 1]);
      }
    }
  });
  return arr;
};
