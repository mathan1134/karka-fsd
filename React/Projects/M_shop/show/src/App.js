import './App.css';
import {Route,Routes} from "react-router-dom"
import {Page} from "./Components/Page"
// import { Cart } from './Components/Cart';

function App() {
  return (
    <>
    <h2 style={{textAlign:"center"}}>M Shop</h2>
    <Routes>
      <Route path='/' element={<Page/>} />
      {/* <Route path='/Cart' element={<Cart/>}/> */}
    </Routes>
    </>
  );
}

export default App;
