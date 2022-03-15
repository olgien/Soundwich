import './App.scss';
import React from "react";
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

                    <hr/>
                    <div className="main-text">
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>

                            <Route path="/mygear">
                                <MyGear/>
                            </Route>

                            <Route path="/sharemygear">
                                <ShareGear />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
