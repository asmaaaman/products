export const isProductInCart = ({ orderState }, id) => {
    return orderState.products.find((product) =>product.id === id);
  };
  