import { useState } from 'react';
import './Account.css';

function Account() {
    const [recover, setRecover] = useState(false);
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || false);
    const [attempts, setAttempts] = useState(0);
    const [loginMessage, setLoginMessage] = useState('');
    const [pass, setPass] = useState('');
    const countries = [
        {
            name: 'brasil',
            pass: 'brasil',
            position: [ -2.7562580015438476 , -48.17132509212502 ],
            marker: 'locked-point',
            id: '0',
        },
        {
            name: 'argentina',
            pass: 'argentina',
            position: [ -40.77563875754914 , -69.2750762182338 ],
            marker: 'locked-point',
        },
        {
            name: 'eua',
            pass: 'eua',
            position: [ 33.71432359567805 , -86.95083968378019 ],
            marker: 'locked-point',
        },
        {
            name: 'polonia',
            pass: 'polonia',
            position: [ 51.57581250779703 , 20.601412987576932 ],
            marker: 'locked-point',
        },
        {
            name: 'turquia',
            pass: 'turquia',
            position: [ 39.87468079676904 , 35.40007298068552 ],
            marker: 'locked-point',
        },
        {
            name: 'mocambique',
            pass: 'mocambique',
            position: [ -9.915867897227745 , 27.67686458128958 ],
            marker: 'locked-point',
        },
        {
            name: 'arabia',
            pass: 'arabia',
            position: [ 25.73921961430858 , 42.000545531346155 ],
            marker: 'locked-point',
        },
        {
            name: 'india',
            pass: 'india',
            position: [ 21.16301794100615 , 79.60419371933031 ],
            marker: 'locked-point',
        },
        {
            name: 'indonesia',
            pass: 'indonesia',
            position: [ -0.396793751120472 , 101.92963933255506 ],
            marker: 'locked-point',
        },
        {
            name: 'turcomenistao',
            pass: 'turcomenistao',
            position: [ 39.4008965162013 , 58.422772177048984 ],
            marker: 'locked-point',
        },  
    ];

    const handleRecover = () => {
        setPass('');
        setRecover(true);
    }

    const logIn = () => {
            setPass('');
            setLoginMessage('');
            setRecover(false);
            localStorage.setItem('auth', JSON.stringify(true));
            setAuth(true);
            return;

    }

    const right = ['1946']

    const handleLogin = () => {
        if (recover) {
            if (pass === '1946') {
                if (!localStorage.getItem('countries')) {
                    localStorage.setItem('countries', JSON.stringify(countries));
                }
                setLoginMessage('Agora sim! Preparando login...');
                setTimeout(function() {
                    logIn();
                }, 1000);
            } else if (pass === '1940') {
                setPass('');
                setLoginMessage('Errado. Isso foi o decreto de fundação…');
            } else if (pass === '1941') {
                setPass('');
                setLoginMessage('Aí foram as primeiras aulas das Faculdades Católicas... não da universidade!');
            } else if (pass === '1947') {
                setPass('');
                setLoginMessage('Aqui passamos a chamar Pontifícia, mas já éramos universidade antes disso.');
            } else if (pass <= '1500') {
                setPass('');
                setLoginMessage('Sério isso? Antes do descobrimento?');
            } else if (pass >= '2000' || pass < '1900') {
                setPass('');
                setLoginMessage('Século errado, tente novamente.');
            } else if (pass === '') {
                setPass('');
                setLoginMessage('Por favor, insira uma resposta.');   
            } else {
                setPass('');
                setLoginMessage('Resposta incorreta. Tente Novamente.');
            }
        } else {
            if (pass === '') {
                setLoginMessage('Por favor, insira uma senha.');              
            } else {
                if (right.includes(pass)) {
                    if (pass === '1946') {
                        if (!localStorage.getItem('countries')) {
                            localStorage.setItem('countries', JSON.stringify(countries));
                        }                        
                    }
                    logIn();
                } else {
                    if (attempts < 2) {
                        setLoginMessage('Senha incorreta. Tente Novamente.')
                        setPass('');
                        setAttempts(attempts+1);
                    } else {
                        setLoginMessage('')
                        setPass('');
                        setAttempts(attempts+1);
                    }
                }
            }
        }
        const audioElement = document.getElementById('audio');
        if(audioElement) {
            audioElement.play();
        } else {
            console.error("Audio element not found");
        }
    }
    

    const handleLogOff = () => {
        setPass('');
        localStorage.setItem('auth', JSON.stringify(false));
        setAuth(false);
    }

    const handleKeyPress = (key) => {
        if (key === "Enter") {
            handleLogin();
        }
    }

    const cleanSlate = () => {
        localStorage.clear();
        location.reload();
    }


    return (
        <div className={auth ? 'account-page-auth' : 'account-page'}>
            <audio id="audio"><source src="sounds/error.mp3" type="audio/mp3"></source></audio>
            
            <div className={auth ? 'box' : 'none'}>
                <h2>SUA CONTA</h2>
                <form>
                    <div className='input-box'>
                        <input type='username' value='agente241' readOnly/>
                    </div>
                    <div className='login-message'></div>
                    <div className='login-btn' onClick={cleanSlate}>Apagar meus dados</div>
                    <div className='login-btn' onClick={handleLogOff}>Sair</div>
                </form>
            </div>

            <div className={auth ? 'none' : 'box'}>
                    <h2>{recover ? 'RECUPERAR ACESSO' : 'ACESSO RESTRITO'}</h2>
                    <form>                        
                        <p className={recover ? 'visible' : 'none'}><b>Pergunta de segurança: </b>Em que ano foram dadas as primeiras aulas em sua universidade?</p>
                        <div className={recover ? 'none' : 'input-box'}>
                            <input type='username' placeholder='Credencial' autoComplete="username"
                            value='agente241' readOnly/>
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