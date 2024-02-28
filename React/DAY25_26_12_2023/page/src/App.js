import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Login} from "./Components/Login"
import {Register} from "./Components/Register"
import {Home} from "./Components/Home"

function App() {
  return (
   <>
   <Router>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Home" element={<Home/>}/>
    
   </Routes>
   </Router>
   </>
  );
}

export default App;
