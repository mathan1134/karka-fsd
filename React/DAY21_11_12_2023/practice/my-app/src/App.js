import logo from './logo.svg';
import './App.css';
import {Home} from './Home.js';
import {About} from './About.js';
import {Contact} from './Contact.js';
import {Button} from './Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Home/>
         <About/>
         <Contact/>
         <Button/>
        
      </header>
    </div>
  );
}

export default App;
