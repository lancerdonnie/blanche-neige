import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let key;
if (process.env.NODE_ENV !== 'production') {
  key = process.env.REACT_APP_GOOGLE;
  console.log('local', key);
} else {
  key = process.env.GOOGLE;
  console.log('prod', key);
}
var firebaseConfig = {
  apiKey: key,
  authDomain: 'blanche-neige-a90a1.firebaseapp.com',
  databaseURL: 'https://blanche-neige-a90a1.firebaseio.com',
  projectId: 'blanche-neige-a90a1',
  storageBucket: 'blanche-neige-a90a1.appspot.com',
  messagingSenderId: '1034923024650',
  appId: '1:1034923024650:web:2fe36d953f2d5c7eb45af3',
  measurementId: 'G-CKTTCCM9XR'
};
firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const gProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;
