import React, { Component } from "react";
import { getProductsRequest} from "../../store/actions/action";
import { addProductAction} from "../../store/actions/action";
import { connect } from "react-redux";
import ProductCard from "../../components/productCard/productCard";



class ProductsList extends Component {
 
  componentDidMount() {
    this.props.onFetchingProducts();
   
  }
  
  render() {
    const { products, fetching, error } = this.props;
    console.log(this.props)
    return (
    
     
      <div className="justify-content-between container-fluid  d-flex flex-wrap mt-5">
         
        {fetching ? (
          <p className="text-center">Fetching...</p>
        ) : error ? (
          <p className="text-center">Something went wrong</p>) 
          : products && products.length > 0 ? (
          
          products.map((product) => (
            <div className="">
              <div className="">
              <ProductCard className="" key={product.id}
               product={product}
            
             
                />
            
              </div>
            </div>
            
        
            
          ))
        
        ) : (
          <p className="text-center">No Products Available</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
  products: state.productsState.products,
  fetching: state.productsState.fetching,
  error: state.error,
 
});

const mapDispatchToProps = (dispatch) => ({
  onFetchingProducts: () => dispatch(getProductsRequest()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
