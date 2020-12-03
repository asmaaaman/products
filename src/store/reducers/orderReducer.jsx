import * as ordertypes from '../actionTypes/ordersTypes';
import action from '../actions/action';


const initialOrderState = {
    cart: []
  };
  const orderReducer = (state = initialOrderState, action) => {
    let cart = state.cart;
   
   switch(action.type) {
       case ordertypes.ADD_ORDER_TO_CART:
        cart.push(action.payload);
        return {
            ...state,
            cart: cart
        };
        default: // need this for default case
        return state 
     
       }
     
   

  }


export default orderReducer; 