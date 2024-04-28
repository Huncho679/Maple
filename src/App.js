import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./Components/Register";
import { Context } from "./Context/Context";
import Home from "./Components/Home";
import ButtonDisplay from "./Components/ButtonDisplay";

export default function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/display" element={<ButtonDisplay />} />
        </Routes>
      </Router>
    </Context>
  );
}
