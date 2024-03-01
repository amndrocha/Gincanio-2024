import { useState } from "react";
import './Messages.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "./slice";

function Messages() {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(-2);
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
                <div className={unlocked && unlocked.includes('arabia saudita') ? 'message' : 'none'}
                onClick={() => openMessage('arabia saudita', 6)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('arabia saudita') ? 'new-icon' : 'none'}>((NEW)) </span>
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
                            Como gostaríamos que todo investigado fosse tão descuidado quanto Catarina!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>

                <div className={unlocked && unlocked.includes('estados unidos') ? 'message' : 'none'}
                onClick={() => openMessage('estados unidos', 3)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('estados unidos') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Você conseguiu mais uma vez! Graças à sua descoberta, pudemos identificar que essa página encontrada no Alabama pertence ao diário de Catarina:
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>

                <div className={unlocked && unlocked.includes('brasil') ? 'message' : 'none'}
                onClick={() => openMessage('brasil', 2)}>                    
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('brasil') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Excelente trabalho, agente241. Parece que Catarina esteve mesmo no Brasil.    
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>

                <div className={unlocked && unlocked.includes('argentina') ? 'message' : 'none'}
                onClick={() => openMessage('argentina', 1)}>
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes('argentina') ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Ficamos felizes em te ver recuperando o tempo perdido.
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
                Estimado Agente 241,
                <br/><br/>
                Como gostaríamos que todo investigado fosse tão descuidado quanto Catarina! Encontramos mais algumas mensagens escritas por Catarina em seu diário virtual, enquanto ela esteve na Polônia:
                <br/><br/>
                <div className="intercepted-message">
                    <img className="message-img" src='./img/catarina0.jpg'/>
                    Sim, Madame Curie, a grande heroína de papai e mamãe. Quantas vezes não os ouvi falar dela, quantas histórias de ninar sobre suas descobertas. Aproveitei o momento para aprender mais sobre ela e conhecer a cidade de Varsóvia, mas toda essa história sobre meus pais e meu misterioso irmão não sai da minha cabeça.
                    <br/><br/>
                    Tinha certeza que iria encontrar um fragmento por lá, então tratei de descobrir em que laboratório papai trabalhava na Universidade de Varsóvia. Fiz amizade com uma velho técnico de lá que conheceu meu pai. Eu não sei falar polonês, mas entendo alguma coisa pois é muito parecido com checo e aprendi um pouco de checo num grupo de estudos de Tradução, na PUC.
                    <br/><br/>
                    Deixei com ele um dos fragmentos para análise em laboratório, amanhã pego de volta. 
                    <br/><br/>
                    Passei a manhã revirando as coisas antigas de papai entre caixas e arquivos da universidade e acabei encontrando algumas cartas que meus pais trocaram. De volta ao hotel, estou lendo uma por uma e aqui estão algumas coisas que descobri. Meus irmãos precisam saber disso!
                    <br/><br/>
                    → Parece que meu irmão não tinha nome até dois anos de idade, quando eles conseguiram fazer amizade com um sujeito chamado Parahat. Escolheram um “nome nobre” e pediram que Parahat ensinasse para ele. É muita nerdice!
                    <br/><br/>
                    → Quando ele fez dez anos, eles conseguiram convencer o pobre Parahat a levar um letreiro neon com o nome do garoto. Como se não bastasse, trocaram um monte de mensagens debatendo o que iriam levar para ele quando fizesse 18…
                    <br/><br/>
                    → Eles encontravam com Parahat sempre na mesma cidade. Ele não morava lá, mas visitava parentes por lá uma vez por ano. De acordo com papai, ”encontrar o pacífico na terra de Santo André é certamente mais seguro que bater diretamente na porta do inferno”
                    <br/><br/>
                    Amanhã vou ao laboratório. Espero descobrir algo sobre esses fragmentos. 
                </div>
                <br/><br/>
                <div className="dossie-title" style={{textAlign: 'center'}}>Onde era o ponto de encontro deles com Parahat? Você consegue descobrir o nome do filho mais velho dos Máximo?</div>
                </div>
                <div className={current == 3 ? 'visible' : 'none'}>
                    Prezado Agente 241,
                    <br/><br/> Você conseguiu mais uma vez! Graças à sua descoberta, conseguimos interceptar o seguinte texto, escrito pela Catarina em seu diário virtual enquanto ela utilizava uma rede wifi pública no Alabama:
                    <br/><br/>
                    <div className="intercepted-message">
                        <img className="message-img" src='./img/catarina0.jpg'/>
                        Ainda não estou acreditando que tenho outro irmão além de Bruno. As pistas que ele deixou me trouxeram até o Centro de Pesquisa de Foguetes de Huntsville. Fui recebida por um ex-aluno de minha mãe e ele me contou que ela parou de publicar pois ficou obcecada por objetos voadores não identificados e alienígenas. Sei lá,  eu nunca ouvi minha mãe falando dessas coisas, achei tudo muito estranho. 
                        <br/><br/>
                        Ele foi muito gentil e me entregou uma caixa com alguns objetos que pertenceram à ela. A maioria eram coisas de escritório, mas no meio das velharias encontrei mais um fragmento misterioso. O que são essas coisas? Achei outro desses na casa onde ela nasceu, no Pará e acho que eles se encaixam.  Tenho que mostrar isso para Janaína, ela vai ficar louca.
                        <br/><br/>
                        Mamãe trabalhou por uns anos aqui em Huntsville antes de começar a namorar papai. Lembro dela contando que saiu daqui em viagem para Europa, para conhecer o museu na cidade natal de sua heroína e foi lá que eles acabaram se reencontrando. O museu era perto do trabalho dele, eu acho.
                        <br/><br/>
                        Acho que já sei onde está o próximo fragmento!                     
                    </div>
                    <br/><br/>
                    <div className="dossie-title" style={{textAlign: 'center'}}>De que heroína Catarina está falando? Onde está o próximo fragmento?</div>
                </div>
                <div className={current == 2 ? 'visible' : 'none'}>
                Excelente trabalho, agente241. 
                <br/><br/>Parece que Catarina esteve mesmo no Brasil. Sabendo disso, invadimos o banco de dados dos Correios brasileiros e encontramos esse estranho telegrama, deixado para Catarina enquanto ela esteve em Belém:
                <br/><br/>
                <div className="intercepted-message"
                style={{lineBreak: 'anywhere'}}>
                    HLQAHNHSQGKMGQAU.
                    <br/>
                    GTKJYEBSKHZHKM.
                    <br/>
                    VKSUKVGTYEUNAUTDKZUHHJ.
                    <br/>
                    SUXBPVHDRKSUURKDLMDTPTHYNPKZQGPKPOUK
                    <br/>
                    CHKVVQMKKIHJNPNZRQQTYQDHAUHPSR.
                    <br/>
                    NQAOSUMNTQUNZNELYR.
                    <br/>
                    HDEYVPNVKPQGKVORVQTEPVNPPF.
                    <br/><br/>
                    <div className="lead123">
                        <div className="circle123">1</div>
                        <div className="grid123">
                            <div style={{display: 'flex', width: 'fit-content'}}>
                                <div  className="box123 box123top">U</div>
                                <div className="box123 box123top">P</div>
                                <div className="box123 box123top">H</div>
                                <div className="box123 box123top">M</div>
                                <div className="box123 box123top">A</div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div className="box123">Y</div>
                                <div className="box123">G</div>
                                <div className="box123">I</div>
                                <div className="box123">L</div>
                                <div className="box123">V</div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div className="box123">Z</div>
                                <div className="box123">X</div>
                                <div className="box123">J</div>
                                <div className="box123">F</div>
                                <div className="box123">C</div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div className="box123">O</div>
                                <div className="box123">R</div>
                                <div className="box123">Q</div>
                                <div className="box123">B</div>
                                <div className="box123">N</div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div className="box123">S</div>
                                <div className="box123">T</div>
                                <div className="box123">E</div>
                                <div className="box123">D</div>
                                <div className="box123">K</div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <br/><br/>
                <div className="dossie-title-center">Decifre esse mensagem, agente241. Vamos tentar alcançá-los.</div>

                </div>
                <div className={current == 1 ? 'visible' : 'none'}>
                    Caro agente 241,
                    <br/><br/>
                    Ficamos felizes em te ver recuperando o tempo perdido.
                    <br/><br/>
                    Por sorte, Catarina tem o hábito de se conectar nas redes wi-fi públicas dos aeroportos, o que nos permitiu acessar algumas mensagens do seu diário virtual, que ela mantém em um chat do WhatsApp com si mesma:
                    <br/><br/>
                    <div className="intercepted-message">
                        <img className="message-img" src='./img/catarina0.jpg'/>
                        Hoje passei o dia visitando museus e, para minha surpresa, um senhor de bengala e óculos escuros me chamou para dançar no meio da rua. Eu não sei dançar tango, mas aceitei e foi uma experiência muito divertida.
                        <br/><br/>
                        Ao final, ele começou a falar numa mistura de português e espanhol, repetindo várias frases muito estranhas.
                        <br/><br/>
                        - Seu irmão escapou da porta de um lugar terrível e está procurando por vocês.
                        - Tem outros atrás de vocês,  tomem cuidado. Conversem como o Barão Lyon, filho de George.
                        - Feche os olhos e dance até o seu destino, pois lá um telegrama te aguarda nos correios.
                        <br/><br/>
                        Cheguei há pouco aqui no hotel e descobri no meu bolso uma pequena peça de metal enrolada num folheto com esses passos estranhíssimos de dança. Ele deve ter colocado no meu casaco enquanto dançávamos. Que passos são esses? Para onde devo ir?                    
                    </div>
                    <br/><br/>

                        <div style={{textAlign: "center"}} className="dossie-title">
                            Se souber de que dança e qual cidade Janaína está falando, podemos prosseguir as investigações.                            
                        </div>
                </div>
                <div className={current == 0 ? 'visible' : 'none'}>
                    Atenção!<br/><br/>Nosso sistema detectou atividades suspeitas na sua conta. Como medida de segurança, a sua senha dessa será alterada a cada nova atualização do banco de dados.<br/><br/>Caso haja alguma tentativa de logar utilizando uma senha antiga, os dados mais recentes da investigação serão ocultados.<br/><br/>
                </div>

            </div>
        </div>
    );
  }
  
  export default Messages;