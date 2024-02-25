import { useState } from 'react';
import { supabase } from './supabaseClient';
import './Account.css';

function Account() {
    const [recover, setRecover] = useState(false);
    const [auth, setAuth] = useState(localStorage.getItem('user'));
    const [attempts, setAttempts] = useState(0);
    const [loginMessage, setLoginMessage] = useState('');
    const [user, setUser] = useState('agente241');
    const [pass, setPass] = useState('');

    async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: user,
            password: pass,
        });
        if (error) {
            document.getElementById('audio').play(); 
            setLoginMessage('Credenciais inválidas.');  
        } else {
            setLoginMessage('');
            localStorage.setItem('user', user);
            setAuth(user);
            localStorage.setItem('id', data.user.id);
            window.dispatchEvent(new Event('id'));
        }
      }
    

    const handleRecover = () => {
        setPass('');
        setRecover(true);
    }

    const handleLogin = () => {
        if (user == 'agente241') {
            if (pass == '1940') {
                setPass('');
                setLoginMessage('');
                setRecover(false);
                localStorage.setItem('user', 'agente241');
                setAuth(localStorage.getItem('user'));
                return;
            }
            else if (recover) {
                if (pass != '') {
                    setPass('');
                    setLoginMessage('Resposta incorreta. Tente Novamente.');   
                } else {
                    setLoginMessage('Por favor, insira uma resposta.');
                }
            }
            else {
                if (pass != '') {
                    if (attempts < 2) {
                        setLoginMessage('Senha incorreta. Tente Novamente.')
                        setPass('');
                        setAttempts(attempts+1);
                    } else {
                        setLoginMessage('')
                        setPass('');
                        setAttempts(attempts+1);
                    }                
                } else {
                    setLoginMessage('Por favor, insira uma senha.')
                }
            }
            document.getElementById('audio').play();            
        } else {
            if (pass != '') {
                // Attempt to sign in with Supabase
                signInWithEmail();
            } else {
                document.getElementById('audio').play(); 
                setLoginMessage('Por favor, insira uma senha.');
            }
        }
    } 

    const handleLogOff = () => {
        if (user != 'agente241') {
            supabase.auth.signOut();
        }
        setUser('');
        setPass('');
        localStorage.clear();
        setAuth(false);
    }

    const handleKeyPress = (key) => {
        if (key === "Enter") {
            handleLogin();
        }
    }


    return (
        <div className={auth ? 'account-page-auth' : 'account-page'}>
            <audio id="audio"><source src="sounds/error.mp3" type="audio/mp3"></source></audio>
            
            <div className={auth ? 'box' : 'none'}>
                <h2>AGENTE 241</h2>
                <form>
                    <div className='input-box'>
                        <input type='username' readOnly
                        value={auth && auth !== 'agente241' ? auth : 'agente241@proton.me'}/>
                    </div>
                    <div className='login-message'></div>
                    <div className='login-btn' onClick={handleLogOff}>Sair</div>
                </form>

            </div>

            <div className={auth ? 'none' : 'box'}>
                    <h2>{recover ? 'RECUPERAR ACESSO' : 'ACESSO RESTRITO'}</h2>
                    <form>                        
                        <p className={recover ? 'visible' : 'none'}><b>Pergunta de segurança:</b> Qual foi o ano de fundação da minha universidade?</p>
                        <div className={recover ? 'none' : 'input-box'}>
                            <input type='username' placeholder='Credencial' autoComplete="username"
                            value={user} onChange={(e) => setUser(e.target.value)}/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Senha' onKeyUp={(e) => handleKeyPress(e.key)}
                            value={pass} onChange={(e) => setPass(e.target.value)}
                            autoComplete="current-password"/>
                        </div>
                        <div className={attempts < 3 || recover ? 'login-message' : 'none'}>{loginMessage}</div>
                        <div className={!recover && attempts >= 3 ? 'login-message' : 'none'}>
                            Precisa de ajuda? <span onClick={handleRecover} className='hyperlink'>Recuperar acesso</span>
                        </div>
                        <div className='login-btn' onClick={handleLogin}>Acessar</div>
                    </form>
            </div>

        </div>
    );
  }
  
  export default Account;