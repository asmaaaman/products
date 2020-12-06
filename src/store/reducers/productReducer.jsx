import * as types from '../actionTypes/types';
import * as action from '../actions/action'

const INITIAL_STATE = {
  products: [],
  product: {},
  fetching: false,
  error: null,

};
const addProducts = (state, action) => ({
  ...state,
  products: [...action.payload.products],
  fetching: false,
});

const addSingleProduct = (state, action) => ({
  ...state,
  product: { ...action.payload.product },
  fetching: false,
});
const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_PRODUCTS_REQUEST:
    case types.SINGLE_PRODUCT_FETCH:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.ADD_PRODUCTS_RESPONSE:
      return addProducts(state, action);
      
    case types.SINGLE_PRODUCT_ADD:
      return addSingleProduct(state, action);

    default: return state
  }

}





export default productReducer; 