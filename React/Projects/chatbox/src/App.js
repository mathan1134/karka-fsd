import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Chat from "./Components/Chat";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Chat" element={<Chat/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
