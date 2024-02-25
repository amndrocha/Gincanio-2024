import { useState } from "react";

function Messages() {
    const [auth, setAuth] = useState(localStorage.getItem('id'));


    
    return (
        <div className="messages-page">
            <div className="messagesPreview"></div>
            {auth ? 'Olá, ' + auth + '.' : 'Olá, ninguém.'}
        </div>
    );
  }
  
  export default Messages;