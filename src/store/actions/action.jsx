import React  from 'react';   
import * as types from '../actionTypes/types';
import * as orderTypes from '../actionTypes/ordersTypes'

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

/*** Order Actions ****/
export const addProductAction = (product) => {
  return {
      type: orderTypes.ADD_ORDER_TO_CART,
      payload: {
          product,
         
      }
  }
};
export const createIncrementQuantityAction = (id) => ({
  type:  orderTypes.INCREMENT_QUANTITY,
  payload: {
    id,
  },
});

export const createDecrementQuantityAction = (id) => ({
  type:  orderTypes.DECREMENT_QUANTITY,
  payload: {
    id,
  },
});

export const removeProductAction = (id) => ({
  type:  orderTypes.DELETE_ORDER,
  payload: {
    id,
  },
});



