import React, {useEffect, useState} from 'react';

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
            test test
            {/*{<Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>*/}

            <div ref={ref}>
                {basket.map(e => <h4 className="item">{e.type}{e.name}</h4>)}
            </div>
            suma
            <div>
                {basket.reduce((a,b) => {
                    return a + b.price
                }, 0)}
            </div>

            {gear.map(e => <p>{e.type} {e.price} <button onClick={() => setBasket(p => [...p, e])}>add</button></p>)}

            {}

        </div>

    );
}

export default ShareGear;