import react from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProductAction } from "../../store/actions/action";
import {isProductInCart} from '../../store/orderFilters/oders';
import "./productCard.scss";


const ProductCard = ({product,onAddingToCart,addedToCart}) =>{
  
  const handleClick = (e) => {
    e.preventDefault();
    onAddingToCart(product);
        console.log("actionssssss" , product)
  };
  
    return(
        <Link className="shadow product-card d-flex m-3" to={`/products/${product.id}`}>     
          <div className="card">
        <img
          className=" product-image p-2"
          src={product.image}
          alt={product.title}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{product.title}</h5>
              <span className="card-text ml-2 product-price">
                ${product.price}
              </span>
            </div>

            <p className="card-text">{product.category}</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={handleClick}
            disabled={addedToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
           </Link>
        
    );
     
}
const mapStateToProps = (state, props) => ({
  addedToCart: isProductInCart(state, props.product.id),
});

const mapDispatchToProps = (dispatch) => ({
  onAddingToCart: (product) => dispatch(addProductAction(product)),
});


export default connect(mapStateToProps,mapDispatchToProps,)(ProductCard);