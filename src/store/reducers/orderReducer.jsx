import * as actions from '../actions/action';
import * as orderTypes from '../actionTypes/ordersTypes.jsx';



const INITIAL_STATE = {
products: JSON.parse(localStorage.getItem("cartProducts")) || [],
 

};

// Add Product
const addProductToOrder = (state, action) => {
  let selectedItems;
  if (action.payload.product.quantity) {
    selectedItems = [
      ...state.products.filter((filtered) => filtered.id !== action.payload.product.id),
      { ...action.payload.product },
    ];
  } else {
 
    selectedItems = [
      ...state.products.filter((filtered) => filtered.id !== action.payload.product.id),
      { ...action.payload.product, quantity: 1 },
    ];
  }
  

  

  

localStorage.setItem("cartProducts", JSON.stringify(selectedItems));

  return {
    products: selectedItems,
  };
};


// remove Product
const removeFromCart = (state, action) => {
  const newProducts = state.products.filter(
    (product) => product.id !== action.payload.id
  );

  localStorage.setItem("cartProducts", JSON.stringify(newProducts));

  return {
    products: newProducts,
  };
};

// Increment Product
const incrementQuantity = (state, action) => {
  const product = state.products.find(
    (product) => product.id === action.payload.id
  );

  const productIndex = state.products.indexOf(product);

  product.quantity = ++product.quantity;

  const newProducts = [
    ...state.products.slice(0, productIndex),
    { ...product },
    ...state.products.slice(productIndex + 1),
  ];

  localStorage.setItem("cartProducts", JSON.stringify(newProducts));

  return {
    products: newProducts,
  };
};

// Decrement Product
const decrementQuantity = (state, action) => {
  const product = state.products.find(
    (product) => product.id === action.payload.id
  );

  const productIndex = state.products.indexOf(product);

  if (product.quantity > 1) product.quantity = --product.quantity;

  const newProducts = [
    ...state.products.slice(0, productIndex),
    { ...product },
    ...state.products.slice(productIndex + 1),
  ];

  localStorage.setItem("cartProducts", JSON.stringify(newProducts));

  return {
    products: newProducts,
  };
};
const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case orderTypes.ADD_ORDER_TO_CART:
      return addProductToOrder(state, action);

    case orderTypes.DELETE_ORDER:
      return removeFromCart(state, action);

    case orderTypes.INCREMENT_QUANTITY:
      return incrementQuantity(state, action);

    case orderTypes.DECREMENT_QUANTITY:
      return decrementQuantity(state, action);

    default:
      return state;
  }
};


export default orderReducer; 