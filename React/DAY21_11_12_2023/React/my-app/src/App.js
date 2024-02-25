import './App.css';
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom"
import {Home} from "./Components/Home"
import {About} from "./Components/About"
import {Contact} from "./Components/Contact"
import {Button} from "./Components/Contact"


const App=()=> {
  return(
    
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Contact">Contacts</Link>
          
          <Link to="/About">About</Link>
        </nav>
      
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>

    </Routes>
    </div>
    </Router>
    
  );
}

export default App

