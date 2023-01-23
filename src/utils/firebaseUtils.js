import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { query, where, collection, getDocs } from 'firebase/firestore';

export const signIn = async () => {
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
};
export const signOutUser = () => {
  signOut(getAuth());
};
export const determineDoc = async (id, firestore, userUid) => {
  let documentName;
  const querySnapshot = await getDocs(
    query(collection(firestore, userUid), where('id', '==', id))
  );
  querySnapshot.forEach(doc => {
    documentName = doc.id;
  });
  return documentName;
};
