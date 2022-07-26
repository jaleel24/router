import {Route} from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductsDetails';
function App() {
  return (
    <div >
      
        <MainHeader />
        <Route path='/welcome'><Welcome /></Route>
        <Route path='/products'><Products /></Route>
        <Route path='/productDetails'><ProductDetails /></Route>
    </div>
  );
}

export default App;
