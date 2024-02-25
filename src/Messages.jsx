import { useState } from "react";

function Messages() {
    const [auth, setAuth] = useState(localStorage.getItem('user'));
    const [initialCountries, setInitialCountries] = useState([
        {
            locked: true,
            id: '1',
        },
        {
            locked: true,
            id: '2',
        },
        {
            locked: true,
            id: '3',
        },
        {
            locked: true,
            id: '4',
        },
        {
            locked: true,
            id: '5',
        },
        {
            locked: true,
            id: '6',
        },
        {
            locked: true,
            id: '7',
        },
        {
            locked: true,
            id: '8',
        },
        {
            locked: true,
            id: '9',
        },
        {
            locked: true,
            id: '10',
        },  
    ]);
    const [initialMessages, setInitialMessages] = useState([
        {
            locked: true,
            read: false,
            id: '1',
        },
    ]);


    
    return (
        <div className="messages-page">
            <div className="messagesPreview"></div>
            {auth ? 'Olá, ' + auth + '.' : 'Olá, ninguém.'}
        </div>
    );
  }
  
  export default Messages;