import { auth, db } from '../config/fbConfig';
import { toast } from 'react-toastify';

export const logStatus = () => async dispatch => {
  await auth.onAuthStateChanged(async user => {
    if (user) {
      const res = await db
        .collection('users')
        .doc(user.uid)
        .get();
      dispatch({ type: 'SET_AUTH', payload: res.data() });
      // localStorage.setItem('auth', true)
      // toast.success('Sign in Successful');
    } else {
      // localStorage.setItem('auth', false);
      dispatch({ type: 'REMOVE_AUTH' });
    }
  });
};
