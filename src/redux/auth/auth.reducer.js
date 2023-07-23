import {fetchCurrentUser} from './auth.types';

const initialState = {
  currentUser: null,
  isLoading: false,
  errMessage: undefined,
};

const currentUserReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case fetchCurrentUser.start:
      return {...state, isLoading: true};

    case fetchCurrentUser.success:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };

    case fetchCurrentUser.fail:
      return {
        ...state,
        isLoading: false,
        return: payload,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
