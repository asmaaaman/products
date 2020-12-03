import { takeEvery, all  } from "redux-saga/effects";
import {handleProductsFetch,handleFetchSingleProduct} from "../sagas/products";
import * as types from '../actionTypes/types';


function* watchAll() {
  yield all([
      takeEvery(
          types.ADD_PRODUCTS_REQUEST, handleProductsFetch),
          takeEvery(types.SINGLE_PRODUCT_FETCH, handleFetchSingleProduct),
        ]);
        

}


 
export default watchAll;