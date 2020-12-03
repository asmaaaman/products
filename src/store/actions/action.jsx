import React  from 'react';   
import * as types from '../actionTypes/types';

export const getProductsRequest = () => ({
    type: types.ADD_PRODUCTS_REQUEST,//fetch
    payload: {},
  });

  
export const getProductsResponse = (products) => ({
  type: types.ADD_PRODUCTS_RESPONSE,
  payload:{products}
});

export const createSingleProductFetchAction = (id) => ({
  type: types.SINGLE_PRODUCT_FETCH,
  payload: {
    id,
  },
});

export const createSingleProductAddAction = (product) => ({
  type: types.SINGLE_PRODUCT_ADD,
  payload: {
    product,
  },
});
