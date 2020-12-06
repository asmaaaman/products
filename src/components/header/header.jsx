import React from "react";
import * as myOrderTypes from '../../store/actionTypes/ordersTypes'
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import * as action from '../../store/actions/action'

const Header =({  selectedProducts,
  incrementQuantity,
  decrementQuantity,
  deleteProduct
})=>{
  const dropdownRef = React.createRef();
    return(
    <nav class="navbar navbar-light bg-light justify-content-between">
    
    <a className="navbar-brand" to="/products">
    All Products
      </a>
      {/* display cart items */}
    <ul class="d-flex">

    <Dropdown className="mr-3">
  
    <Dropdown.Toggle variant="primary" id="dropdown-basic">
   <span> Cart </span><i class="fa fa-shopping-cart" ></i> 
  </Dropdown.Toggle>
        

          <Dropdown.Menu className="selected-products-menu" 
          ref={dropdownRef}>
            {selectedProducts && selectedProducts.length > 0 ? (
              <React.Fragment>
             
                <Dropdown.Header> Your Products </Dropdown.Header>
                {selectedProducts.map((product) => (
                  <div key={product.id} className="px-4 py-3 product-item">
                    <div className="d-flex flex-wrap justify-content-between">
                      <span className="mr-3 product-title">
                        {product.title} ({product.quantity})
                      </span>
                      <div 
                      className="buttons-container d-flex justify-content-lg-end justify-content-center flex-grow-1">
                        <button
                         onClick={(e) => incrementQuantity(product.id)}
                       
                          className="quantity-btn btn btn-dark btn-sm mr-3">
                          +
                        </button>
                        <button
                         onClick={(e) => decrementQuantity(product.id)}
                          className="quantity-btn btn btn-dark btn-sm mr-3"
                        >
                          -
                        </button>
                        <button
                         
                          className="quantity-btn btn btn-danger btn-sm mr-3"
                        >
                       <i  onClick={(e) => deleteProduct(product.id)} class="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
             
              </React.Fragment>
            ) : (
              <Dropdown.Header className="text-center">
                Shopping Cart (0)
              </Dropdown.Header>
            )}
          </Dropdown.Menu>
        </Dropdown>



      <Dropdown>
      <Dropdown.Toggle variant="light">
      <i class="fas fa-user-plus"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item className="signout">Sign Out</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    </ul>
  
     </nav>

  
     )
};
const mapDispatchToProps = (dispatch) => ({
  incrementQuantity: (id) => dispatch(action.createIncrementQuantityAction(id)),
  decrementQuantity: (id) => dispatch(action.createDecrementQuantityAction(id)),
  deleteProduct: (id) => dispatch(action.removeProductAction(id)),
});

const mapStateToProps = ({ orderState }) => ({
  selectedProducts: orderState.products,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
