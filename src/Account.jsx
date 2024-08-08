import { useEffect, useState } from 'react';
import './Account.css';
import { supabase } from './supabase';
import { guardaLocal, recuperaLocal } from './sensitive';

function Account() {
	const [paisesIniciais, setPaisesIniciais] = useState(['']);
	const [testeSenha, setTesteSenha] = useState(['']);
    const [recover, setRecover] = useState(false);
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || false);
    const [attempts, setAttempts] = useState(0);
    const [loginMessage, setLoginMessage] = useState('');
    const currentPass = localStorage.getItem('pass') || '1946';
    const [pass, setPass] = useState('');
    
	let paises = [];
    const errorSound = document.getElementById('audio');
    const paths = [["c1", "c2", "c3", "c4", "c5"], ["c6", "c7"],["c8", "c9"]];
	let dafuq = 0;
	
    
	useEffect(() => {
		getTesteSenha();
		getPaisesIniciais();
    }, []);
        

    async function getTesteSenha(){
		const { data } = await supabase.from('passes').select('senha, estado');
		setTesteSenha(data);
	}
	
	async function getPaisesIniciais(){
		const { data } = await supabase.from('points').select('name, pass, position');
		setPaisesIniciais(data);		
	}
	
	
	function configuraPaises(){
		if(paisesIniciais.length > 1 ){
			paisesIniciais.forEach((element, i) => {
				let posicoes = String(element.position).split(",");
				let positionX = parseFloat(String(posicoes[0]).replace(/[^0-9.+-]/g, ''));
				let positionY = parseFloat(String(posicoes[1]).replace(/[^0-9.+-]/g, ''));			
				paises.push({ id:i, name:element.name, pass:element.pass,  position:[positionX, positionY], marker:"locked-point"});
			});
		}
	}

    const handleRecover = () => {
        setPass('');
        setRecover(true);
    }

    const getPath = () => {
		guardaLocal('checkpoints', testeSenha);
		
        let path = [];
		
		
		testeSenha.forEach(elemento => {
            if (String(elemento.senha) == pass) {				
                path = String(elemento.estado).split(',');
            }
        })
        let last = false;
        let unlocked = [];
        paths.forEach((array, i) => {
            if (path[i] != '') {
                array.forEach((country, j) => {
                    if (j == 0) {
                        last = false;
                    }
                    if (!last) {
                        unlocked.push(country);
                        if (path[i].includes(country)) {
                            last = true;
                        }               
                    }
                })
            }
        })
		configuraPaises();
        paises.forEach(country => {
            if (unlocked.includes(country.name)) {
                country.marker = 'unlocked-point';
            }
        })
		guardaLocal('countries', paises);
        localStorage.setItem('pass', pass);
        location.reload();
		
		
    }

    const logIn = () => {
            setPass('');
            setLoginMessage('');
            setRecover(false);
            localStorage.setItem('auth', JSON.stringify(true));
            setAuth(true);
            return;
    }
    
	const existeSenha = (pass) => {
		for( let i=0; i < testeSenha.length ; i++ ){	
			if(testeSenha[i].senha === pass){
				return true;
			}	
		}
		return false;
	}

    const handleLogin = () => {
        if (recover) {
            if (pass === '1946') {
				recupera = recuperaLocal('countries');
                if (!recupera) {
					guardaLocal('countries', countries);
                }
                setLoginMessage('Agora sim! Preparando login...');
                setTimeout(function() {
                    logIn();
                }, 1500);
                return;
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
                if (pass === '1946' || existeSenha(pass)) {
                    if (pass === '1946') {
						recupera = recuperaLocal('countries');
						if (!recupera) {
							guardaLocal('countries', countries);
						}					
                    } else {
                        getPath();
                    }
                    logIn();
                    return;  
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
        errorSound.play();
    }

    const handleLogOff = () => {
        setPass('');
        setAuth(false);
        localStorage.clear();
        location.reload();
    }

    const handleKeyPress = (key) => {
        if (key === "Enter") {
            handleLogin();
        }
    }

    const [showPass, setShowPass] = useState(false);

    const handleViewPass = () => {
        setShowPass(!showPass);
    }

    return (
        <div className={auth ? 'account-page-auth' : 'account-page'}>
            <audio id="audio"><source src="sounds/error.mp3" type="audio/mp3"></source></audio>
            
            <div className={auth ? 'box' : 'none'}>
                <h2>SUA CONTA</h2>
                <form>
                    <div className='input-box'>
                        <input type='username' value='agente242' readOnly/>
                    </div>
                    <div className='input-box'>
                        <input type={showPass ? 'text' : 'password'} placeholder='Senha' readOnly
                        value={currentPass}/>
                        <div className='show-pass' >👁</div>
                        <div className={showPass ? 'none': 'hide-pass'}>/</div>
                        <div className='cover-icon' onClick={handleViewPass}></div>
                    </div>
                    <div className='login-message'></div>
                    <div className='login-btn' onClick={handleLogOff}>Sair</div>
                </form>
            </div>

            <div className={auth ? 'none' : 'box'}>
                    <h2>{recover ? 'RECUPERAR ACESSO' : 'ACESSO RESTRITO'}</h2>
                    <form>                        
                        <p className={recover ? 'visible' : 'none'}><b>Pergunta de segurança: </b>Em que ano foram dadas as primeiras aulas em sua universidade?</p>
                        <div className={recover ? 'none' : 'input-box'}>
                            <input type='username' placeholder='Credencial' autoComplete="username"
                            value='agente242' readOnly/>
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