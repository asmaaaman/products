import { takeLatest, call, put } from 'redux-saga/effects';

import * as actions from '../actions/action';
import { fetchProducts,fetchSingleProduct} from '../apis/products';



export function* handleProductsFetch() {
    try {    
      const products = yield call(fetchProducts);  
      yield put(actions.getProductsResponse(products));
    }
     catch(error){
       console.log(error);
       
     }
  }
  export function* handleFetchSingleProduct(action) {
    try {
      const product = yield call(fetchSingleProduct, action.payload.id);
  
      yield put(actions.createSingleProductAddAction(product));
    } catch (error) {
      console.log(error);
    }
  }  