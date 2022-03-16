import React from 'react';
import {  Link } from "react-router-dom";
function MyGear(props) {
    return (
        <div className="my-gear">Moja lista sprzętu:

            <br/><br/>
            <div className="linkback">
                <Link to="/">Wróć do głównej</Link>
            </div>

        </div>


    );
}

export default MyGear;