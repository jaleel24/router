import {Route, Switch,Redirect} from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductsDetails';
function App() {
  return (
    <div >
      
        <MainHeader />
        <Switch>
          <Route path="/" exact> <Redirect to="/welcome"/></Route>
        <Route path='/welcome'><Welcome /></Route>
        <Route path='/products' exact><Products /></Route>
        <Route path='/products/:priductId'><ProductDetails /></Route>
        </Switch>
    </div>
  );
}

export default App;
