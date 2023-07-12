import productTypes from './product.types';

const initialState = {
  frontalWigsProducts: [],
  isLoading: false,
  errMessage: undefined,
};

const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case productTypes.start:
      return {...state, isLoading: true};

    case productTypes.success:
      return {
        ...state,
        isLoading: false,
        frontalWigsProducts: payload,
      };

    case productTypes.fail:
      return {
        ...state,
        isLoading: false,
        errMessage: payload,
      };

    default:
      return state;
  }
};

export default productReducer;
