import React, {useEffect, useState} from 'react';
import {  Link } from "react-router-dom";
import './MyGear.scss';

function MyGear(props) {
    const [gear, setGear] = useState([])
    const [basket, setBasket] = useState([])
    const ref = React.createRef();
    useEffect(() => {
        fetch('http://localhost:3000/gear')
            .then(d => d.json())
            .then(r => setGear(r))
    }, [])
    return (
        <div className="my-gear">
            <h3>Mój sprzęt - lista:</h3>
            {gear.map(e => <p><h4>{e.id}. {e.type}:</h4> <strong>{e.name} {e.brand}</strong><br/><br/>
                cena wynajmu: {e.price} zł / dzień <br/><br/>
                Do ubezpieczenia:<br/>
                nr seryjny: {e.insurance.serial} - {e.insurance.price}
                <br/><br/></p>


            )}
            <Link className="linkstyle" to="/sharemygear">Przejdź do zamówienia sprzętu</Link><br/>
            <Link className="linkstyle" to="/">Powrót do strony głównej</Link><br/><br/>
        </div>
    );
}

export default MyGear;