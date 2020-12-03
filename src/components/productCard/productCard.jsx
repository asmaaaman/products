import react from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProductCard = ({product,fetching,error}) =>{
    return(
        <Link to={`/products/${product.id}`}>     
           
           <div className="container mt-5">
        {fetching ? (
          <p className="text-center">Fetching...</p>
        ) : error ? (
          <p className="text-center">Something went wrong</p>
        ) : product ? (
            <div key={product.id} className="col-md-3">
            <div class="card" >
            <img  src={product.image} class="img-fluid" alt={product.title}/>
            <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.price} $</p>
              <a href="#" class="btn btn-primary">ADD To CART</a>
            </div>
          </div>
          </div>
        ) : (
          <p className="text-center">No Products Available</p>
        )}
      </div>
           </Link>
    );
     
}

export default ProductCard;