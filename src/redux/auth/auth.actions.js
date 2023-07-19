//loginUser;
import {fetchCurrentUser} from './auth.types';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {auth} from '../../firebase/firebase';

export const fetchCurrentUserStart = () => ({
  type: fetchCurrentUser.start,
});

export const successFetchingCurrentUser = (currentUser) => ({
  type: fetchCurrentUser.success,
  payload: currentUser,
});

export const failFetchingCurrentUser = (errMessage) => ({
  type: fetchCurrentUser.fail,
  payload: errMessage,
});

export const loginUserAsync = (plartform) => {
  return async (dispatch) => {
    try {
      fetchCurrentUserStart();
      const googleProvider = new GoogleAuthProvider();
      const facebookProvider = new FacebookAuthProvider();

      if (plartform === 'google') {
        const result = await signInWithPopup(auth, googleProvider);

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        dispatch(successFetchingCurrentUser(user));
      } else if (plartform === 'facebook') {
        const result = await signInWithPopup(auth, facebookProvider);

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        dispatch(successFetchingCurrentUser(user));
      }
    } catch (error) {
      const errMessage = error.message;

      dispatch(failFetchingCurrentUser(errMessage));
    }
  };
};
