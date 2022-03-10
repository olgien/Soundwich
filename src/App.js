import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/about">Mój sprzęt</Link>
            </li>
            <li>
              <Link to="/dashboard">Udostępnij listę sprzętu</Link>
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
          <Switch>
            <Route exact path="/">
              lorem ipsum
            </Route>
            <Route path="/about">
              Mój sprzęt:
            </Route>
            <Route path="/dashboard">
              Udostępnij swoją listę sprzętu:
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
