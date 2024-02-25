import { Route, Routes } from "react-router-dom";
import './App.css';
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Main } from "./Components/Main";
import { Profile } from "./Components/Profile";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>

    </>
  );
}

export default App;
