import { useState } from "react";
import './Messages.css'

function Messages() {
    const [current, setCurrent] = useState(0);
    const [unlocked, setUnlocked] = useState(['argentina']);

    
    return (
        <div className="messages-page">

            <div className="messages-preview">

                <div className={unlocked.includes('argentina') ? 'message' : 'none'} 
                onClick={() => setCurrent(0)}>
                    Atenção! Nosso sistema detectou atividades suspeitas na sua conta. Para evitar a perda dos dados da investigação, é imprescindível que você atualize seu endereço de e-mail e senha imediatamente. Sem essa ação, a sua conta estará comprometida.
                </div>

            </div>
            <div className="current-message">

                <div className={current == 0 ? 'visible' : 'none'}>
                    Atenção!<br/><br/>Nosso sistema detectou atividades suspeitas na sua conta. Para evitar a perda dos seus dados, é imprescindível que você atualize seu endereço de e-mail e senha imediatamente.<br/><br/>Sem essa ação, a sua conta estará comprometida  e sua autorização para continuar nesta investigação será revogada.<br/><br/><span onClick={() => setSignUp(true)} className="hyperlink">Clique aqui</span> para atualizar a sua conta o quanto antes.
                </div>

            </div>
        </div>
    );
  }
  
  export default Messages;