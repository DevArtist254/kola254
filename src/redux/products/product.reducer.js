import productTypes from './product.types'

const initialState = {
    product: null,
}

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case productTypes.LOAD_PRODUCT:
    return { ...state, product: payload }

  default:
    return state
  }
}


export default productReducer;