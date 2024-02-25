import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import { Main } from './Components/Main'

function App() {
  return (
   <>
   <h3>storage</h3>
   <Routes>
    <Route path="/" element={<Login/>}  />
    <Route path='Main' element={<Main/>}/>
   </Routes>
   </>
  );
}

export default App;
