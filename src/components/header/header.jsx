import React from "react";
import { Link } from "react-router-dom";

const Header =({

})=>{
    return(
    <nav class="navbar navbar-light bg-light">
    
    <a className="navbar-brand" to="/products">
    All Products
      </a>
      <ul>
       <li>
         items
       </li> 
     </ul>   
     </nav>

  
     )
};

export default Header;
