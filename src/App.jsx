import Navbar from "./components/molecules/Navbar/Navbar"
import Home from "./components/molecules/pages/Home";
import About from "./components/molecules/pages/About";
import Login from "./components/molecules/pages/Login";
import Register from "./components/molecules/pages/Register";
import "./styles.css";
import{
    BrowserRouter as Router,
  Routes,Route,Link
}from "react-router-dom"
export default function App() {
  return (
    <>
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/"  element={<Home />}></Route>
      <Route path="/about"  element={<About />}></Route>
      
     
       <Route path="/login"  element={<Login />}>
       
       </Route>
       <Route path="/register"  element={<Register />}>
       
       </Route>
    </Routes>
    
    </div>
    </Router>
    </>
  );
}