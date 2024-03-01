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
            pass: 'mae jemison',
            position: [ 33.71432359567805 , -86.95083968378019 ],
            marker: 'locked-point',
        },
        {
            name: 'polonia',
            pass: 'marie curie',
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
          {
        name: 'Localização146546',
        pass: '654649898779797',
        position: [51.5074, -0.1278],
        marker: 'locked-point',
    },
    {
        name: 'Localização24646',
        pass: '654649898779797',
        position: [40.7128, -74.0060],
        marker: 'locked-point',
    },
    {
        name: 'Localização345466',
        pass: '654649898779797',
        position: [-22.9068, -43.1729],
        marker: 'locked-point',
    },
    {
        name: 'Localização47998',
        pass: '654649898779797',
        position: [35.6895, 139.6917],
        marker: 'locked-point',
    },
    {
        name: 'Localização59897',
        pass: '654649898779797',
        position: [48.8566, 2.3522], 
        marker: 'locked-point',
    },
    {
        name: 'Localização69898',
        pass: '654649898779797',
        position: [-33.8688, 151.2093],
        marker: 'locked-point',
    },
    {
        name: 'Localização798989',
        pass: '654649898779797',
        position: [55.7558, 37.6176],
        marker: 'locked-point',
    },
    {
        name: 'Localização8656565',
        pass: '654649898779797',
        position: [19.4326, -99.1332],
        marker: 'locked-point',
    },
    {
        name: 'Localização95565656',
        pass: '654649898779797',
        position: [-34.6037, -58.3816], 
        marker: 'locked-point',
    },
    {
        name: 'Localização1546650',
        pass: '654649898779797',
        position: [37.7749, -122.4194], 
        marker: 'locked-point',
    },
        {
        name: 'Localização116565',
        pass: '654649898779797',
        position: [52.2297, 21.0122],
        marker: 'locked-point',
    },
    {
        name: 'Localização126454665',
        pass: '654649898779797',
        position: [43.6532, -79.3832],
        marker: 'locked-point',
    },
    {
        name: 'Localização13656554',
        pass: '654649898779797',
        position: [41.9028, 12.4964],
        marker: 'locked-point',
    },
    {
        name: 'Localização1465656',
        pass: '654649898779797',
        position: [52.5200, 13.4050],
        marker: 'locked-point',
    },
    {
        name: 'Localização15565566',
        pass: '654649898779797',
        position: [-33.4489, -70.6693],
        marker: 'locked-point',
    },
    {
        name: 'Localização1698989',
        pass: '654649898779797',
        position: [59.3293, 18.0686],
        marker: 'locked-point',
    },
    {
        name: 'Localização176464644',
        pass: '654649898779797',
        position: [30.0444, 31.2357],
        marker: 'locked-point',
    },
    {
        name: 'Localização186565656',
        pass: '654649898779797',
        position: [37.5665, 126.9780],
        marker: 'locked-point',
    },
    {
        name: 'Localização1965656565',
        pass: '654649898779797',
        position: [55.6761, 12.5683], 
        marker: 'locked-point',
    },
    {
        name: 'Localização208888888',
        pass: '654649898779797',
        position: [38.7223, -9.1393],
        marker: 'locked-point',
    },
        {
        name: 'LocalizaçãoP666666',
        pass: '654649898779797',
        position: [-12.0464, -77.0428],
        marker: 'locked-point',
    },
        {
        name: 'LocalizaçãoC11111',
        pass: '654649898779797',
        position: [45.4215, -75.6919],
        marker: 'locked-point',
    },
    {
        name: 'LocalizaçãoC2222',
        pass: '654649898779797',
        position: [53.5461, -113.4938],
        marker: 'locked-point',
    },
    {
        name: 'LocalizaçãoNR11111',
        pass: '654649898779797',
        position: [69.3549, 88.1897], 
        marker: 'locked-point',
    },
    {
        name: 'LocalizaçãoNR2',
        pass: '654649898779797',
        position: [68.9585, 33.0828],
        marker: 'locked-point',
    },
        {
        name: 'LocalizaçãoA111111',
        pass: '654649898779797',
        position: [6.5244, 3.3792],
        marker: 'locked-point',
    },
    {
        name: 'LocalizaçãoA222222',
        pass: '654649898779797',
        position: [-1.2921, 36.8219],
        marker: 'locked-point',
    },
    {
        name: 'LocalizaçãoA333333',
        pass: '654649898779797',
        position: [-33.9249, 18.4241],
        marker: 'locked-point',
    }
        
       
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
