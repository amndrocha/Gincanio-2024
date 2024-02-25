import { useState } from "react";

function Messages() {
    const [auth, setAuth] = useState(localStorage.getItem('user'));
    return (
        <div className="messages-page">
            {auth ? 'Olá, ' + auth + '.' : 'Olá, ninguém.'}
        </div>
    );
  }
  
  export default Messages;