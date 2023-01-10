import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from './pages/LoginSignup/LoginSignup';
import Dashboard from './pages/UserDashboard/UserDashboard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './Redux/Actions/UserActions';
import ProtectedRoute from './Route/ProtectedRoute'
import Header from './pages/Layout/Header/Header';
import Footer from './pages/Layout/Footer/Footer';
function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<LoginSignup/>} />
        <Route exact path='/dashboard' element={<ProtectedRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

