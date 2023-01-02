import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from './pages/LoginSignup/LoginSignup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<LoginSignup/>} />
      </Routes>
    </Router>
  );
}

export default App;
