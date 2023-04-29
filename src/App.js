import './App.css';
import Navs from './Component/Navs';
import {Products,store} from './Component/Products';
import Cart from './Component/Cart';
import { Routes,Route, useBeforeUnload } from 'react-router-dom';
import { Provider } from 'react-redux';
//import store from 


function App() {
  useEffect(() => {
    alert("My code is working perfectly on Local server, it is not working correctly after hosting on Github, Please Click HomePage Button to load data. and add a product in cart to access cartPage, Redux is working perrfectly")
})
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
