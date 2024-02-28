import { useState } from "react";
import './Messages.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "./slice";

function Messages() {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(0);
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
        setCurrent(message);

    }
    
    return (
        <div className="messages-page">

            <div className="messages-preview">

                <div className={unlocked && unlocked.includes('brasil') ? 'message' : 'none'}
                onClick={() => openMessage('brasil', 2)}>
                    <span className={newMessages && newMessages.includes('brasil') ? 'visible' : 'none'}>((NEW)) </span>
                    O Brasil foi revelado!
                </div>

                <div className={unlocked && unlocked.includes('argentina') ? 'message' : 'none'}
                onClick={() => openMessage('argentina', 1)}>
                    <span className={newMessages && newMessages.includes('argentina') ? 'visible' : 'none'}>((NEW)) </span>
                    A Argentina foi revelada!
                </div>

                <div className='message'
                onClick={() => openMessage('', 0)}>
                    <span className={newMessages && newMessages.includes('') ? 'visible' : 'none'}>((NEW)) </span>
                    Atenção! Nosso sistema detectou atividades suspeitas na sua conta. Para evitar a perda dos dados da investigação, é imprescindível que você atualize seu endereço de e-mail e senha imediatamente. Sem essa ação, a sua conta estará comprometida.
                </div>

            </div>
            <div className="current-message">
                <div className="diviser"></div>
                <div className="return"></div>
                <div className={current == 2 ? 'visible' : 'none'}>
                    O Brasil foi revelado!
                </div>

                <div className={current == 1 ? 'visible' : 'none'}>
                    A Argentina foi revelada!
                </div>

                <div className={current == 0 ? 'visible' : 'none'}>
                    Atenção!<br/><br/>Nosso sistema detectou atividades suspeitas na sua conta. Como medida de segurança, a senha da sua conta foi alterada.<br/><br/>Caso haja alguma tentativa de logar utilizando uma senha antiga, os dados mais recentes da investigação serão ocultados.<br/><br/>

                    Atenção!<br/><br/>Nosso sistema detectou atividades suspeitas na sua conta. Como medida de segurança, a senha da sua conta foi alterada.<br/><br/>Caso haja alguma tentativa de logar utilizando uma senha antiga, os dados mais recentes da investigação serão ocultados.<br/><br/>
                </div>

            </div>
        </div>
    );
  }
  
  export default Messages;