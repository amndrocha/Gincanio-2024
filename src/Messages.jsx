import { useState } from "react";
import './Messages.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "./slice";

function Messages() {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(-1);
    const newMessages = useSelector(state => state.message.message);
    const [countries, setCountries] = useState(JSON.parse(localStorage.getItem('countries')) || []);

    const getUnlocked = () => {
        if (countries) {
            const unlockedCountries = countries.filter(country => 
                country.marker === 'dark-unlocked-point' || country.marker === 'unlocked-point'
            );
        
            const unlockedCountryNames = unlockedCountries.map(country => country.name);
            return unlockedCountryNames;
        }    
    };

    const unlocked = countries ? getUnlocked() : [];

    window.addEventListener('news', () => {
        setCountries(JSON.parse(localStorage.getItem('countries')));
    });

    const openMessage = (countryName, message) => {
        dispatch(remove(countryName));
        setCurrent(message)
        setPreview(false);
    }

    const [preview, setPreview] = useState(true);


    return (
        <div className="messages-page">

            <div className={preview ? 'view-messages-preview' : "messages-preview"}>
                <div className={unlocked && unlocked.includes('turcomenistao') ? 'message' : 'none'}
                onClick={() => openMessage('turcomenistao', 10)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('turcomenistao') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            O Turcomenistão foi revelado!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>
                <div className={unlocked && unlocked.includes('turquia') ? 'message' : 'none'}
                onClick={() => openMessage('turquia', 9)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('turquia') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            A Turquia foi revelada!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>
                <div className={unlocked && unlocked.includes('india') ? 'message' : 'none'}
                onClick={() => openMessage('india', 8)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('india') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            A Índia foi revelada!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>
                <div className={unlocked && unlocked.includes('indonesia') ? 'message' : 'none'}
                onClick={() => openMessage('indonesia', 7)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('indonesia') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            A Indonésia foi revelada!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>
                <div className={unlocked && unlocked.includes('arabia') ? 'message' : 'none'}
                onClick={() => openMessage('arabia', 6)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('arabia') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            A Arábia Saudita foi revelada!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>  
                <div className={unlocked && unlocked.includes('mocambique') ? 'message' : 'none'}
                onClick={() => openMessage('mocambique', 5)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('mocambique') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            O Moçambique foi revelado!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>               
                <div className={unlocked && unlocked.includes('polonia') ? 'message' : 'none'}
                onClick={() => openMessage('polonia', 4)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('polonia') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            A Polônia foi revelada!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>

                <div className={unlocked && unlocked.includes('eua') ? 'message' : 'none'}
                onClick={() => openMessage('eua', 3)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('eua') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Os Estados Unidos foram revelados!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>

                <div className={unlocked && unlocked.includes('brasil') ? 'message' : 'none'}
                onClick={() => openMessage('brasil', 2)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('brasil') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                                O Brasil foi revelado!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>

                <div className={unlocked && unlocked.includes('argentina') ? 'message' : 'none'}
                onClick={() => openMessage('argentina', 1)}>
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('argentina') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            A Argentina foi revelada!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>

                <div className='message'
                onClick={() => openMessage('', 0)}>
                    <div style={{display: 'flex'}}>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Atenção! Nosso sistema detectou atividades suspeitas na sua conta...
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>

            </div>
            <div className={preview ?  'current-message' : "view-current-message"}>
                <div className="return" onClick={() => setPreview(true)}></div>
                <div className="diviser"></div>
                <div className={current == 10 ? 'visible' : 'none'}>
                    O Turcomenistão foi revelado!
                </div>
                <div className={current == 9 ? 'visible' : 'none'}>
                    A Turquia foi revelada!
                </div>
                <div className={current == 8 ? 'visible' : 'none'}>
                    A Índia foi revelada!
                </div>
                <div className={current == 7 ? 'visible' : 'none'}>
                    A Indonésia foi revelada!
                </div>
                <div className={current == 6 ? 'visible' : 'none'}>
                    A Arábia Saudita foi revelada!
                </div>
                <div className={current == 5 ? 'visible' : 'none'}>
                    O Moçambique foi revelado!
                </div>
                <div className={current == 4 ? 'visible' : 'none'}>
                    A Polônia foi revelada!
                </div>
                <div className={current == 3 ? 'visible' : 'none'}>
                    Os Estados Unidos foram revelados!
                </div>
                <div className={current == 2 ? 'visible' : 'none'}>
                    O Brasil foi revelado!
                </div>

                <div className={current == 1 ? 'visible' : 'none'}>
                    A Argentina foi revelada!
                </div>

                <div className={current == 0 ? 'visible' : 'none'}>
                    Atenção!<br/><br/>Nosso sistema detectou atividades suspeitas na sua conta. Como medida de segurança, a sua senha dessa será alterada a cada nova atualização do banco de dados.<br/><br/>Caso haja alguma tentativa de logar utilizando uma senha antiga, os dados mais recentes da investigação serão ocultados.<br/><br/>

                    <div className="intercepted-message">
                        <img className="message-img" src='./img/raposo0.jpg'/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fugit. Ullam unde debitis magni? Illum magni omnis a, earum quas necessitatibus dolores facilis accusantium modi cum non mollitia. Quam, fugiat.
                    </div>
                </div>

            </div>
        </div>
    );
  }
  
  export default Messages;