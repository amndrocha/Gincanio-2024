import { useState } from "react";
import './Messages.css'

function Messages() {
    const [auth, setAuth] = useState(localStorage.getItem('id'));


    
    return (
        <div className="messages-page">
            <div className="messages-preview">
                <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente totam aut. Natus, mollitia nihil aperiam ullam, esse adipisci minus recusandae quis debitis commodi iusto libero, ratione nemo? Delectus, dolore.</div>
                <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente totam aut. Natus, mollitia nihil aperiam ullam, esse adipisci minus recusandae quis debitis commodi iusto libero, ratione nemo? Delectus, dolore.</div>
                <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente totam aut. Natus, mollitia nihil aperiam ullam, esse adipisci minus recusandae quis debitis commodi iusto libero, ratione nemo? Delectus, dolore.</div>
            </div>
            <div className="current-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente totam aut. Natus, mollitia nihil aperiam ullam, esse adipisci minus recusandae quis debitis commodi iusto libero, ratione nemo? Delectus, dolore.
            </div>
        </div>
    );
  }
  
  export default Messages;