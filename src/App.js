import './App.scss';
import ProductList from './containers/products/productList'
import Routes from './routes/route'
import Header from './components/header/header'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
       
    </div>
  );
}

export default App;
