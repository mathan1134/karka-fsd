
import { Check } from './Components/Check';
import {Main} from "./Components/Main"

function App() {
  return (
    <div className="App">
     <Main/>
     <Check/>
    </div>
  );
}

export default App;


// fetch('https://jsonplaceholder.typicode.com/users/5')
//     .then(response => response.json())
//     .then(json => console.log(json))