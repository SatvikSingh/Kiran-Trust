import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from './pages/LoginSignup/LoginSignup';
import Dashboard from './pages/UserDashboard/UserDashboard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Redux/Actions/UserActions';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<LoginSignup/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
