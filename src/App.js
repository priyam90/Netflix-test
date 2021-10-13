
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Home from "./home/Home";
import Register from "./register/Register";
import Login from "./login/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

       <Router>
      <Switch>
        <Route exact path="/">
        <Home /> 
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login"> <Login /> 
        </Route>
         <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
        
            {/* <Route path="/watch">
              <Watch />
            </Route> */}
          </>
         </Switch>
    </Router>
    </div>
  );
}

export default App;
