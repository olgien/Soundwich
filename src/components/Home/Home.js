import React from 'react';
// import { useState } from 'react';
// import { send } from 'emailjs-com';
// import emailjs from '@emailjs/browser';

function Home(props) {
    return (
        <div className="home">
            <p className="text">

                Soundwich to łatwa aplikacja do udostępniania swojego sprzętu na wynajem.
                <br/><br/>
                <strong>JEŚLI CHCESZ UDOSTĘPNIĆ SWÓJ SPRZĘT:</strong><br/><br/>
                - STWÓRZ WŁASNĄ SOUNDWICH:<br/><br/>
                1.  W zakładce "Mój sprzęt" wpisz sprzęt, który posiadasz na wynajem.<br/>
                Pamiętaj o podaniu producentów, o dokładnych modelach oraz cenie wynajmu za dzień.
                <br/><br/>
                2. Do udostępnienia Twojego sprzętu posłuży zakładka "Udostępnij listę sprzętu". <br/>
                Skopiuj jej link i wyślij zainteresowanym wynajmem.
                <br/>
                <br/>
                <strong>JEŚLI CHCESZ WYNAJĄĆ SPRZĘT:</strong>
                <br/><br/>
                1. Otrzymując link z listą sprzętu na wynajem, zyskujesz dostęp do kalkulatora kosztów.
                <br />
                2. Odpowiednimi przyciskami dodaj kolejne przedmioty do zamówienia.
                <br/>
                Możesz zapisać tę listę jako dokument PDF, wydrukować ją lub wysłać mailem.
                <br /><br/>
                Potrzebujesz pomocy z obsługą aplikacji? Napisz do nas: <br/>

            </p>
        </div>
    );
}
//
// function App() {
//     const [toSend, setToSend] = useState({
//         from_name: '',
//         to_name: '',
//         message: '',
//         reply_to: '',
//     });
//
//     const onSubmit = (e) => {
//         e.preventDefault();
//         e.preventDefault();
//         send(
//             'service_2y0ixef',
//             'template_p4qeegc',
//             toSend,
//             'RG9_7F7oUzn1sQAPs'
//         )
//             .then((response) => {
//                 console.log('SUCCESS', response.status, response.text);
//             })
//             .catch((err) => {
//                 console.log('FAIL', err);
//             });
//     };
//
//     const handleChange = (e) => {
//         setToSend({ ...toSend, [e.target.name]: e.target.value });
//     };
//     return (
//         <div className="App">
//             <form onSubmit={onSubmit}>
//                 <input
//                     type='text'
//                     name='from_name'
//                     placeholder='from name'
//                     value={toSend.from_name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type='text'
//                     name='to_name'
//                     placeholder='to name'
//                     value={toSend.to_name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type='text'
//                     name='message'
//                     placeholder='Your message'
//                     value={toSend.message}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type='text'
//                     name='reply_to'
//                     placeholder='Your email'
//                     value={toSend.reply_to}
//                     onChange={handleChange}
//                 />
//                 <button type='submit'>Wyślij!</button>
//             </form>
//         </div>
//       );
// }
export default Home;