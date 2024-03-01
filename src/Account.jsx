import { useEffect, useState } from 'react';
import './Account.css';

function Account() {
    const [recover, setRecover] = useState(false);
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || false);
    const [attempts, setAttempts] = useState(0);
    const [loginMessage, setLoginMessage] = useState('');
    const currentPass = localStorage.getItem('pass') || '1946';
    const [pass, setPass] = useState('');
    const initialCountries = [
        {
            name: 'brasil',
            pass: 'carimbo',
            position: [ -2.7562580015438476 , -48.17132509212502 ],
            marker: 'locked-point',
            id: '0',
        },
        {
            name: 'argentina',
            pass: 'catarina',
            position: [ -40.77563875754914 , -69.2750762182338 ],
            marker: 'locked-point',
        },
        {
            name: 'estados unidos',
            pass: 'jemison',
            position: [ 33.71432359567805 , -86.95083968378019 ],
            marker: 'locked-point',
        },
        {
            name: 'polonia',
            pass: 'curie',
            position: [ 52.226935156019415 , 21.00532683694275 ],
            marker: 'locked-point',
        },
        {
            name: 'turquia',
            pass: 'helio',
            position: [ 41.00823543738099 , 28.964718023163034 ],
            marker: 'locked-point',
        },
        {
            name: 'mocambique',
            pass: 'janaina',
            position: [ -25.96396503793443 , 32.57084229018247 ],
            marker: 'locked-point',
        },
        {
            name: 'arabia saudita',
            pass: 'sadalsuud',
            position: [ 21.41860157679805 , 39.83525706418852 ],
            marker: 'locked-point',
        },
        {
            name: 'india',
            pass: 'tamil',
            position: [ 21.16301794100615 , 79.60419371933031 ],
            marker: 'locked-point',
        },
        {
            name: 'indonesia',
            pass: 'pustaha',
            position: [ -0.396793751120472 , 101.92963933255506 ],
            marker: 'locked-point',
        },
        {
            name: 'turcomenistao',
            pass: 'darvaza',
            position: [ 39.4008965162013 , 58.422772177048984 ],
            marker: 'locked-point',
        },  
    ];
    const countries = initialCountries;
    const errorSound = document.getElementById('audio');
    const paths = [["argentina", "brasil", "estados unidos", "polonia", "turquia"], ["mocambique", "arabia saudita"],["indonesia", "india"]];
    const words = [
        "marmota",
        "cangalho",
        "pamonha",
        "xarope",
        "cacareco",
        "muvuca",
        "zumbido",
        "ximbica",
        "gambiarra",
        "munganga",
        "marreco",
        "cochicho",
        "cuscuz",
        "trambique",
        "pinguim",
        "chafariz",
        "lagartixa",
        "trambolho",
        "falsete",
        "fricote",
        "choramingo",
        "pinguelo",
        "mambembe",
        "pandorga",
        "acocorado",
        "capenga",
        "xerife",
        "estrovenga",
        "bochecha",
        "arapuca",
        "pernilongo",
        "ziguezague",
        "xaveco",
        "patacoada",
        "patolino",
        "esparrela",
        "patuscada",
        "tumulto",
        "embuste",
        "bagunceiro",
        "desbunde",
        "xereta",
        "esbugalhado",
        "almofadinha",
        "esguicho",
        "chilique",
        "borboleta",
        "piparote",
        "borralho",
        "zarolho",
        "espantalho",
        "espoleta",
        "xurumela",
        "pechincha"
    ];
    useEffect(() => {
        const paths = [["argentina", "brasil", "estados unidos", "polonia", "turquia"], ["mocambique", "arabia saudita"],["indonesia", "india"]];
        const words = [
            "marmota",
            "cangalho",
            "pamonha",
            "xarope",
            "cacareco",
            "muvuca",
            "zumbido",
            "ximbica",
            "gambiarra",
            "munganga",
            "marreco",
            "cochicho",
            "cuscuz",
            "trambique",
            "pinguim",
            "chafariz",
            "lagartixa",
            "trambolho",
            "falsete",
            "fricote",
            "choramingo",
            "pinguelo",
            "mambembe",
            "pandorga",
            "acocorado",
            "capenga",
            "xerife",
            "estrovenga",
            "bochecha",
            "arapuca",
            "pernilongo",
            "ziguezague",
            "xaveco",
            "patacoada",
            "patolino",
            "esparrela",
            "patuscada",
            "tumulto",
            "embuste",
            "bagunceiro",
            "desbunde",
            "xereta",
            "esbugalhado",
            "almofadinha",
            "esguicho",
            "chilique",
            "borboleta",
            "piparote",
            "borralho",
            "zarolho",
            "espantalho",
            "espoleta",
            "xurumela",
            "pechincha"
        ];

        function generatePaths(currentPath, index, allPaths) {
            if (index === currentPath.length) {
                allPaths.push(currentPath.slice()); 
                return;
            }

            for (let i = 0; i <= paths[index].length; i++) {
                currentPath[index] = i < paths[index].length ? paths[index][i] : ''; 
                generatePaths(currentPath, index + 1, allPaths); 
            }
        }
        let allPaths = [];
        let currentPath = ['', '', ''];
        let checkpoints = [];
        generatePaths(currentPath, 0, allPaths);
        for (let i = 0; i < allPaths.length; i++) {
            checkpoints.push({
                path: allPaths[i],
                password: words[i],
            });
        }
        localStorage.setItem('checkpoints', JSON.stringify(checkpoints));
    }, []);

    

    const handleRecover = () => {
        setPass('');
        setRecover(true);
    }

    const getPath = () => {        
        const checkpoints = JSON.parse(localStorage.getItem('checkpoints'));
        let path = [];
        checkpoints.forEach(checkpoint => {
            if (checkpoint.password == pass) {
                path = checkpoint.path;
            }
        })
        let last = false;
        let unlocked = [];
        paths.forEach((array, i) => {
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
        })
        countries.forEach(country => {
            if (unlocked.includes(country.name)) {
                country.marker = 'unlocked-point';
            }
        })
        localStorage.setItem('countries', JSON.stringify(countries));
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

    const handleLogin = () => {
        if (recover) {
            if (pass === '1946') {
                if (!localStorage.getItem('countries')) {
                    localStorage.setItem('countries', JSON.stringify(countries));
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
                if (pass === '1946' || words.includes(pass)) {
                    if (pass === '1946') {
                        if (!localStorage.getItem('countries')) {
                            localStorage.setItem('countries', JSON.stringify(countries));
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
                        <input type='username' value='agente241' readOnly/>
                    </div>
                    <div className='input-box'>
                        <input type={showPass ? 'text' : 'password'} placeholder='Senha' readOnly
                        value={currentPass}/>
                        <div className={showPass ? 'none': 'hide-pass'}>/</div>
                        <div className='show-pass' >👁</div>
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