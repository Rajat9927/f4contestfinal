import './App.css';
import Navs from './Component/Navs';
import {Products,store} from './Component/Products';
import Cart from './Component/Cart';
import { Routes,Route, useBeforeUnload } from 'react-router-dom';
import { Provider } from 'react-redux';
//import store from 


function App() {
  return (
    <div>
      <Navs />
      <Routes>
        <Route path="/" element = {<Products />} />
        
        <Route path = "/cart" element={<Cart store  = {store}/>} />
      </Routes>
    </div>
  );
}

export default App;
