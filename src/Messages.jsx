import { useState } from "react";
import './Messages.css'
import { supabase } from "./supabaseClient";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function Messages() {
    //const [auth, setAuth] = useState(localStorage.getItem('id'));
    const [current, setCurrent] = useState(0);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [unlocked, setUnlocked] = useState(['argentina']);
    const [signUp, setSignUp] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);
    
    const [captchaToken, setCaptchaToken] = useState()

    

    async function signUpNewUser(event) {
        event.preventDefault(); // Prevent form submission
        try {
            const { user, error } = await supabase.auth.signUp({
                email: email,
                password: pass,
                options: { captchaToken },
            });
    
            if (error) {
                throw error;
            }
    
            console.log('User signed up successfully:', user);
            // You may want to handle successful signup, maybe close the modal
        } catch (error) {
            console.error('Error signing up user:', error.message);
            // You may want to display the error message to the user
        }
    }

    const handleKeyPress = (key) => {
        if (key === "Enter") {
            signUpNewUser();
        }
    }

    
    return (
        <div className="messages-page">
            
            <div className={signUp ? 'modal' : 'none'}>
                <div className="modal-window"
                style={{height: 'fit-content'}}>
                    <div className="modal-header">
                        <div className="close-btn" onClick={() => setSignUp(false)}>fechar</div>
                    </div>
                    <div className="modal-content">
                        <form onSubmit={(e) => signUpNewUser(e)}>                       
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
                            <HCaptcha
                            sitekey="6227bd89-17fb-4463-9f53-f8c45b194205"
                            onVerify={(token) => { setCaptchaToken(token) }}
                            />
                            <button className="login-btn" style={{marginBottom: '20px'}}>Enviar</button>
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