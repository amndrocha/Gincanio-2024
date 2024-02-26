import { useState } from "react";
import './Messages.css'
import { supabase } from "./supabaseClient";

function Messages() {
    const [auth, setAuth] = useState(localStorage.getItem('id'));
    const [current, setCurrent] = useState(0);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [unlocked, setUnlocked] = useState(['argentina']);
    const [singUp, setSignUp] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);

    async function signUpNewUser() {
        try {
            const { user, error } = await supabase.auth.signUp({
                email: email,
                password: pass,
            });
    
            if (error) {
                throw error;
            }
    
            alert.log('User signed up successfully:', user);
            return user;
        } catch (error) {
            alert.error('Error signing up user:', error.message);
            throw error;
        }
      }

    const handleKeyPress = (key) => {
        if (key === "Enter") {
            signUpNewUser();
        }
    }

    
    return (
        <div className="messages-page">

            <div className={singUp ? 'modal' : 'none'}>
                <div className="modal-window"
                style={{height: 'fit-content'}}>
                    <div className="modal-header">
                        <div className="close-btn" onClick={() => setSignUp(false)}>fechar</div>
                    </div>
                    <div className="modal-content">
                        <form>                       
                            <p style={{textAlign: 'center'}}>Cuidado ao escolher novo email e senha!<br/>Não será possível alterá-los no futuro.</p>       
                            <div className='input-box'>
                                <input type='email' placeholder='Email' autoComplete="email"
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className='input-box'>
                                <input type={viewPassword ? 'text' : 'password'} placeholder='Senha' onKeyUp={(e) => handleKeyPress(e.key)}
                                value={pass} onChange={(e) => setPass(e.target.value)}
                                autoComplete="current-password"/>
                                <div className={viewPassword ? 'none' : 'hidePassword'}>/</div>
                                <div className="viewPassword">👁</div>
                                <div onClick={() => setViewPassword(!viewPassword)}
                                style={{width: '19px', height: '30px'}}
                                className="viewPassword"></div>
                            </div>
                            <button className="login-btn" style={{marginBottom: '20px'}}
                            onClick={signUpNewUser}>Enviar</button>
                        </form>                           
                    </div>
                </div>
            </div>

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