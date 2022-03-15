import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home";
import MyGear from "./components/MyGear/MyGear";
import ShareGear from "./components/ShareGear/ShareGear";

function App() {
  return (
    <div className="App">


      <Router>
        <div className="menulist">
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/mygear">Mój sprzęt</Link>
            </li>
            <li>
              <Link to="/sharemygear">Udostępnij listę sprzętu</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <div className="main-text">
          <Switch>

            <Route exact path="/">
                    <Home />
            </Route>

            <Route path="/mygear">
                    <MyGear />
            </Route>

            <Route path="/sharegear">

            </Route>
          </Switch>
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
