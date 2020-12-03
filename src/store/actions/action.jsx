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

/*** Order Actions ****/
export const addToCart = (product) => {
  return {
      type: 'ADD_TO_CART',
      payload: {
          product,
          quantity: 1
      }
  }
};
export const removeFromCart = (id) => {
  return {
      type: 'REMOVE_FROM_CART',
      payload: {
          productId: id
      }
  }
};
export const updateCartQuantity = (id, quantity) => {
return {
    type: 'UPDATE_CART_QUANTITY',
    payload: {
        id,
        quantity: quantity
    }
}
};