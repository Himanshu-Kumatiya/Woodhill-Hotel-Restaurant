import "./App.css";
import {Route,Routes} from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import NavbarC from "./components/Navbar";
import Dashboard from './pages/Dashboard';
import PrivateRoute from "./components/PrivateRoute";
import FooterC from "./components/Footer";
import About from "./components/About";
import Room from "./components/Room";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="flex flex-col flex-wrap dark bg-[rgb(16,23,42)] text-gray-200">
      <NavbarC/>
      <Routes>
      <Route path="/"  element={<Home/>}/>
        <Route path="/login"  element={<LoginPage/>}/>
        <Route path="/Register"  element={<RegisterPage/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="/room/:roomId"  element={<Room/>}/>
        <Route path="/contact"  element={<Contact/>}/>
      </Routes>
      <FooterC/>
    </div>
  );
}

export default App;
