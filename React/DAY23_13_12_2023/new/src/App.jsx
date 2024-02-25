import React from 'react';
import { BrowserRouter as Router,Routes,Link,Route } from 'react-router-dom';
import MyComponent from './Components/MyComponent';

const App = () => {
  
   


  return (
    <Router>
    <div>
      <nav>
        <Link to="/MyComponent">MyComponent</Link>     
      </nav>   
  <Routes>
    <Route path='/MyComponent' element={<MyComponent/>}></Route>
  </Routes>
  </div>
  </Router>
 

  );

};

export default App;
