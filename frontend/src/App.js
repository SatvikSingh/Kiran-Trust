import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
// import store from "./store"
import Home from './pages/Home/Home';
import Loginsignup from './pages/Login/Loginsignup'
import Header from "./pages/Layout/Header/Header";
import Footer from "./pages/Layout/Footer/Footer";
import UserOptions from './components/Useroptions/UserOptions'
function App() {
  // useEffect(() => {
  //   store.dispatch(loadcredentials());
  // }, []);
  // const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Router>
      <Header />
      {/* {isAuthenticated && <UserOptions user={user} />} */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Loginsignup}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;



<Route exact path="/login" component={Loginsignup}/>