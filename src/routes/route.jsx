import {BrowserRouter as Router, Link, Route,Switch, Redirect} from 'react-router-dom'
import ProductList from '../containers/products/productList'
import ProductDetails from '../containers/productDetails/productdeatails'
import ProductCard from '../components/productCard/productCard'
import Header from '../components/header/header'
const Routes = () => {
    return(
        <Router>
        <div>
        <Switch>
        
          <Route path="/products/:id" component={ProductDetails}/>
          <Route  path="/" component={ProductList}/>
          <Route exact={true}  path="**" component={ProductList}/>
          </Switch>
        </div>
      </Router>
    )

  
}

export default Routes;