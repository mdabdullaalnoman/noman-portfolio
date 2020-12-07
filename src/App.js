import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Component/Home/Home/Home";
import Nomatch from './Component/Nomatch/Nomatch';
import Work from './Component/Work/Work/Work';
import Contract from './Component/Contract/Contract';

function App() {
  return (
  <Router>
    <Switch>

      <Route path="/home">
        <Home/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>

      <Route path="/work">
        <Work/>
      </Route>

      <Route path="/contact">
        <Contract/>
      </Route>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="*">
        <Nomatch/>
      </Route>
      
    </Switch>
  </Router>
  );
}

export default App;
