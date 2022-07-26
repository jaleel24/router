import {Route} from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
function App() {
  return (
    <div >
      
        <MainHeader />
        <Route path='/welcome'><Welcome /></Route>
        <Route path='/products'><Products /></Route>
    </div>
  );
}

export default App;
