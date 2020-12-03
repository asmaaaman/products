import React , { Component }from 'react';
import { Link } from "react-router-dom";
import ProductsList from '../products/productList'
import { connect } from "react-redux";
import * as actions from "../../store/actions/action";

class ProductDetails extends Component {
  
   componentDidMount(){
    const getProduct = (state, id) => {
        return state.productsState.products.find((product) => product.id === +id);
      };
      this.props.getProduct(this.props.match.params.id);
     
   }
    render() { 
        const { product } = this.props;

        return (
          <div className="container">
          <div className="col-md-8">
          <div class="card" >
          <img  src={product.image} class="img-fluid" alt={product.title}/>
          <div class="card-body">
      <h5 class="card-title">{product.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
        </div>







             );
    }

}
 
const mapStateToProps = ({ productsState}, props) => ({
    product: productsState.product,
    fetching: productsState.fetching,
    error: productsState.error,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getProduct: (id) => dispatch(actions.createSingleProductFetchAction(id)),

  });
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);
