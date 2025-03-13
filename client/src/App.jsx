import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import AppRoutes from "./components/AppRoutes";
import Container from 'react-bootstrap/Container';
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  )
}

export default App
