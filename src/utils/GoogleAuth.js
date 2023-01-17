import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const signIn = async () => {
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
};
export const signOutUser = () => {
  signOut(getAuth());
};
