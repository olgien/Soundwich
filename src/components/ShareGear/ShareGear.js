import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './ShareGear.scss';

function ShareGear(props) {
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
            Złóż zamówienie na wynajem: <br/><br/>
            <div ref={ref}>
                {basket.map(e => <p><strong>{e.type}:</strong> {e.brand} {e.name}</p>)}
            </div>
            <p className="suma-style"><strong>suma:</strong></p>
            <div className="price-style">
                {basket.reduce((a,b) => {
                    return a + b.price
                }, 0)} zł
                <hr/>
            </div>

            {gear.map(e => <p>{e.type}: {e.brand} {e.name}: {e.price} zł <button onClick={() => setBasket(p => [...p, e])}>add</button></p>)}

            {}
            <Link className="linkstyle" to="/mygear">Zobacz listę sprzętu z numerami serialnymi</Link><br/>
            <Link className="linkstyle" to="/">Powrót do strony głównej</Link><br/><br/>
        </div>
    );
}


export default ShareGear;