import { auth, db } from '../config/fbConfig';
import { toast } from 'react-toastify';

export const logStatus = () => async dispatch => {
  await auth.onAuthStateChanged(async user => {
    if (user) {
      const res = await db
        .collection('users')
        .doc(user.uid)
        .get();
      dispatch({
        type: 'SET_AUTH',
        payload: { id: user.uid, ...res.data() }
      });
    } else {
      dispatch({ type: 'REMOVE_AUTH' });
    }
  });
};

export const storeUpdate = id => {
  return async dispatch => {
    await db
      .collection('users')
      .doc(id)
      .onSnapshot(function(doc) {
        // var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // console.log(source, " data: ", doc.data());
        console.log(doc.data());
        dispatch({ type: 'STORE_UPDATE', payload: doc.data().favourites });
      });
  };
};
