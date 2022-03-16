import './App.scss';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
                </div>
                    <hr/>
                <div className="main-text">
                        {/*<Routes>*/}
                        {/*    <Route exact path="/">*/}
                        {/*        <Home/>*/}
                        {/*    </Route>*/}

                        {/*    <Route path="/mygear">*/}
                        {/*        <MyGear/>*/}
                        {/*    </Route>*/}

                        {/*    <Route path="/sharemygear">*/}
                        {/*        <ShareGear />*/}
                        {/*    </Route>*/}
                        {/*</Routes>*/}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mygear" element={<MyGear />} />
                        <Route path="/sharemygear" element={<ShareGear />} />

                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
