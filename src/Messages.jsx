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
        console.log(countryName);
        dispatch(remove(countryName));
        setCurrent(message)
        setPreview(false);
    }

    const [preview, setPreview] = useState(true);

    const arrowRight = '>>';
    const arrowLeft = '<<';

    const msg15 = (preview) => {
        if (unlocked.includes("c10")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c10") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            CAIXA DE SAÍDA: MENSAGEM NÃO ENVIADA
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
                    <div className="dossie-title" style={{textAlign: 'center'}}>
                        CAIXA DE SAÍDA: MENSAGEM NÃO ENVIADA
                    </div>
                    <br/><br/>

                        <div className="dossie-title">
                            De:
                        </div>
                        agente242
                        <div className="dossie-title">
                            Para:
                        </div>
                        agente242
                        <div className="dossie-title" style={{color: 'lime'}}>.</div>
                        <br/>
                        Parabéns por ter nos seguido até aqui, calouro. Sou eu, Viktor, e estou correndo riscos ao acessar esse sistema, mas estou precisando desesperadamente de ajuda. 
                        <br/><br/>
                        A agência é controlada por extraterrestres e eles são incapazes de pensamento abstrato. Um simples enigma como esses pode atrasá-los por dias. Use a cifra musical que enviei para Bruno para me enviar um telegrama!
                        <br/><br/>
                        <img className="mask" src='./img/afgfsade.png'/> 
                    </>
                )
            }
        }
    }
    const msg10 = (preview) => {
        if (unlocked.includes("c10")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c10") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Aqui está a íntegra do telegrama que você decifrou.
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
                        Aqui está a íntegra do telegrama que você decifrou.
                    <br/><br/>
                        <div className="intercepted-message">
                            VIKTOR
                            <br/><br/>
                            NOS ENCONTRE NA CRATERA 
                            <br/><br/>
                            TEMOS TODOS OS FRAGMENTOS
                            <br/><br/>
                            O QUE ESTÃ ACONT3CENDO, AGENTE242?
                            <br/><br/>
                            VOCÃ ESTÃ SE COM~NICANDO COM O IN´_MIG´?
                            <br/><br/>
                            REPORTE-SE ÃÃ B4SE IMEDI_T_M3NT;.-
                        </div>
                    </>
                )
            }
        }
    }    
    const msg7 = (preview) => {
        if (unlocked.includes("c8")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c8") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Localizamos Bruno num albergue em Medan, no Sumatra e interceptamos o telegrama abaixo.
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Localizamos Bruno num albergue em Medan, no Sumatra e interceptamos o telegrama abaixo.
                    <br/><br/>
                    <div className="intercepted-message">
                        RFQJG CMN RSQBR J HMYV
                        <br/><br/>
                        LNETOYT BJ CELDIC BTAQPSC
                        <br/><br/>
                        HCQBETELJP OUKQU EM RNM
                        <br/><br/>
                        <div className="lead123">
                            <div className="circle123">3</div>
                            <div className="grid123">
                                <div style={{display: 'flex', width: 'fit-content'}}>
                                    <div  className="box123 box123top">F</div>
                                    <div className="box123 box123top">H</div>
                                    <div className="box123 box123top">Z</div>
                                    <div className="box123 box123top">X</div>
                                    <div className="box123 box123top">D</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className="box123">C</div>
                                    <div className="box123">R</div>
                                    <div className="box123">K</div>
                                    <div className="box123">A</div>
                                    <div className="box123">Q</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className="box123">M</div>
                                    <div className="box123">O</div>
                                    <div className="box123">U</div>
                                    <div className="box123">J</div>
                                    <div className="box123">V</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className="box123">E</div>
                                    <div className="box123">Y</div>
                                    <div className="box123">N</div>
                                    <div className="box123">B</div>
                                    <div className="box123">G</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className="box123">T</div>
                                    <div className="box123">P</div>
                                    <div className="box123">L</div>
                                    <div className="box123">S</div>
                                    <div className="box123">I</div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <br/>
                    <div className="dossie-title" style={{textAlign: 'cente'}}>
                        Agente242, nossos técnicos estão finalmente aprendendo como esses códigos funcionam. A mensagem parece falar de números. Que sistema numérico é esse e onde foi inventado?
                        
                    </div>
                    </>
                )
            }
        }
    }    

    const msg6 = (preview) => {
        if (unlocked.includes("c7")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c7") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Aqui está a íntegra do telegrama que você decifrou. 
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Aqui está a íntegra do telegrama que você decifrou.
                    <br/><br/>
                    Parabéns pelo belo trabalho, agente242.
                    <br/><br/>
                    <div className="intercepted-message">
                        O LUAR VISTO DE DENTRO DO RELOGIO MAIOR 
                        <br/><br/>
                        DIGA AO VIGIA O TERMO LOCAL
                        <br/><br/>
                        DA SORTE DAS SORTES NO COSMOS
                        <br/><br/>
                        TEMOS UM ALIADO INTERNO
                        <br/><br/>
                        ELE PRECISA DOS FRAGMENTOS E DO CODIGO
                    </div>
                    <br/><br/>

                    <div className="dossie-title" style={{textAlign: 'center'}}>
                        A investigação parece estar num beco sem saída, agente242.  Os Máximo estão se aproximando perigosamente de nossa base. Em breve teremos que tomar medidas drásticas.
                    </div>
                    </>
                )
            }
        }
    } 

    const msg17 = (preview) => {
        if (unlocked.includes("c6")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c6") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            A pista sobre a agência de correios em Maputo nos levou até esse outro telegrama.
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Bom trabalho, agente242!
                    <br/><br/>
                    A pista sobre a agência de correios em Maputo nos levou até esse outro telegrama:
                    <br/><br/>
                    <div className="intercepted-message"
                    style={{lineBreak: 'anywhere'}}>
                        Y GMVK ZEPMR XF XFRPON XR YDGYJXX AHXNO.
                        <br/><br/>
                        XEMO OX HFJXO X SDOTY GKGBG.
                        <br/><br/>
                        XZ MYDZF XBM MYDZLB YN GKUPYM.
                        <br/><br/>
                        SDAXU TA OJEZXN XRPDYYN.
                        <br/><br/>
                        LSI SYDJFMB XRU EOZMAIYMRB L XR GKXEMX.
                        <br/><br/>
                        <div className="lead123">
                            <div className="grid123">
                                <div className='circle123'>2</div>
                                <div style={{display: 'flex', width: 'fit-content'}}>
                                    <div  className="box123 box123top">R</div>
                                    <div className="box123 box123top">O</div>
                                    <div className="box123 box123top">N</div>
                                    <div className="box123 box123top">Y</div>
                                    <div className="box123 box123top">K</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className="box123">D</div>
                                    <div className="box123">X</div>
                                    <div className="box123">I</div>
                                    <div className="box123">E</div>
                                    <div className="box123">F</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className="box123">Q</div>
                                    <div className="box123">G</div>
                                    <div className="box123">J</div>
                                    <div className="box123">L</div>
                                    <div className="box123">C</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className="box123">T</div>
                                    <div className="box123">M</div>
                                    <div className="box123">P</div>
                                    <div className="box123">S</div>
                                    <div className="box123">U</div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className="box123">Z</div>
                                    <div className="box123">A</div>
                                    <div className="box123">H</div>
                                    <div className="box123">B</div>
                                    <div className="box123">V</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>


                    <div className="dossie-title" style={{textAlign: 'center'}}>Esse telegrama deve falar sobre os próximos passos de Janaina. Para onde ela foi? O que ela deve dizer?</div>
                    </>
                )
            }
        }
    } 

    const msg5 = (preview) => {
        if (unlocked.includes("c6")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c6") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Recebemos novas transmissão de nosso spyware.
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Recebemos novas transmissão de nosso spyware.
                    <br/><br/>
                    <div className="intercepted-message">
                    Bruno {arrowRight} Manas, encontrei um fragmento onde vocês indicaram. Ainda não consigo acreditar nisso tudo.
                    <br/><br/>
                    Janaína {arrowRight} Se você não consegue, imagine eu.
                    <br/><br/>
                    Catarina {arrowRight} Olha, para piorar as coisas, ontem eu dei um fragmento desses para um técnico aqui na Europa avaliar no laboratório. Ele me garantiu que não tem nada parecido com esse metal na Terra. Algum de vocês ouviu mamãe falar alguma vez de alienígenas?
                    <br/><br/>
                    Bruno{arrowRight} Não.
                    <br/><br/>
                    Janaína{arrowRight} Não.
                    <br/><br/>
                    Bruno {arrowRight} Olha só isso. Vocês sabem de onde é essa página? Acho que é uma cópia, mas se for original vale uma fortuna.  Alguém colocou num envelope debaixo da minha porta.
                    <br/><br/>
                    Janaína {arrowRight} Claro que não é original, Bruno, não viaja. 
                    <br/><br/>
                    Catarina {arrowRight} Gente, quem é Viktor? é algum de vocês pregando uma peça? Recebi umas mensagens estranhíssimas…
                    <br/><br/>
                    {arrowLeft} CONNECTION LOST {arrowRight}
                    </div>
                    <br/>
                    <div className="dossie-title" style={{textAlign: 'center'}}>Agente242, determine o nome e a origem desse documento para que possamos continuar as investigações.</div>
                    <br/>
                    <img style={{width: '100%'}} src='./img/egdfged.png'/>
                    </>
                )
            }
        }
    } 

    const msg12 = (preview) => {
        if (unlocked.includes("c5")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c5") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Interceptamos uma mensagem de Janaina para Catarina. Eles precisam ser contidos.
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Interceptamos uma mensagem de Janaina para Catarina. Eles precisam ser contidos
                    <br/><br/>
                    <div className="intercepted-message">
                    <img className="message-img" src="./img/janaina0.jpg"/>
                        Mana,
                        <br/><br/>
                        Aqui é um lugar inacreditável, Bruno ia adorar isso aqui. Fiz o que combinamos e disse a tal senha para o vigia do observatório. A coisa toda é um super hotel de luxo, estou até agora sem acreditar, mas parece que tudo que o Bruno disse é verdade e nossos pais faziam parte mesmo de uma sociedade secreta!
                        <br/><br/>
                        Foi uma conversa estranhíssima mas, de acordo com eles, uma nave em queda foi vista nos céus do Mar Cáspio no início dos anos 70 e nossos pais foram ao local investigar.
                        <br/><br/>
                        Mamãe na época já estava grávida do nosso irmão perdido. Eles ficaram sumidos por um tempo e, quando voltaram, nada do bebê. Logo em seguida eles se afastaram da sociedade, voltaram para o Brasil e passaram a evitar contato com a sociedade. Como que a gente nunca ficou sabendo disso, mana?
                        <br/><br/>
                        Você conseguiu falar com Viktor? Ele vai mesmo nos ajudar?
                        <br/><br/>
                        Viajo amanhã, estou indo até você. Nos encontramos na aldeia?
                    </div>
                    <br/><br/>
                    <div className="dossie-title" style={{textAlign: 'center'}}>IMPORTANTE</div>
                    Agente242, estamos convencidos de que os irmãos Máximo estão prestes a cometer um atentado grave contra nós! Já entendeu de que aldeia eles estão falando?! Pois é!
                    <br/><br/>
                    Ignore todas as recomendações anteriores e, se encontrá-los, USE FORÇA LETAL.
                    </>
                )
            }
        }
    }

    const msg9 = (preview) => {
        if (unlocked.includes("c5")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c5") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Nossos agentes foram ao endereço de Parahat, em Istambul, e recuperaram o telegrama abaixo,
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
                        Nossos agentes foram ao endereço de Parahat, em Istambul, e recuperaram o telegrama abaixo, endereçado para alguém chamado Viktor:
                        <br/><br/>
                        <div className="intercepted-message"
                        style={{lineBreak: 'anywhere'}}>
                            RQBG DHOQMR CL
                            <br/>
                            FAG DPXAFOEG KZ XGOELGO.
                            <br/>
                            ELYRE ZQRZR ZR OMGXLRKAZR.
                            <br/><br/>
                            <div className="lead123">
                                <div className="circle123">4</div>
                                <div className="grid123">
                                    <div style={{display: 'flex', width: 'fit-content'}}>
                                        <div  className="box123 box123top">B</div>
                                        <div className="box123 box123top">I</div>
                                        <div className="box123 box123top">Y</div>
                                        <div className="box123 box123top">J</div>
                                        <div className="box123 box123top">H</div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div className="box123">P</div>
                                        <div className="box123">N</div>
                                        <div className="box123">F</div>
                                        <div className="box123">K</div>
                                        <div className="box123">V</div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div className="box123">Z</div>
                                        <div className="box123">A</div>
                                        <div className="box123">O</div>
                                        <div className="box123">T</div>
                                        <div className="box123">Q</div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div className="box123">S</div>
                                        <div className="box123">G</div>
                                        <div className="box123">R</div>
                                        <div className="box123">E</div>
                                        <div className="box123">D</div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div className="box123">C</div>
                                        <div className="box123">X</div>
                                        <div className="box123">M</div>
                                        <div className="box123">L</div>
                                        <div className="box123">U</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        }
    }     

    const msg14 = (preview) => {
        if (unlocked.includes("c9")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c9") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Aqui está a íntegra do telegrama que você decifrou.
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Aqui está a íntegra do telegrama que você decifrou.
                        <br/><br/>
                    <div className="intercepted-message">
                        CHAVE QUE APAGA O FOGO
                        <br/><br/>
                        NUMEROS EM ANTIGA ESCRITA  
                        <br/><br/>
                        FRAGMENTOS MORAM NO CEU
                    </div>
                    <br/>
                    <div className="dossie-title" style={{textAlign: 'center'}}>
                        O que você decifrou com o sistema Tamil, agente242? Você não está nos escondendo algo, está?
                    </div>
                    </>
                )
            }
        }
    }     
    
    const msg8 = (preview) => {
        if (unlocked.includes("c9")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c9") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            A transcrição abaixo parece ser do grupo que os irmãos Máximo mantém para se comunicar e foi interceptada por nosso spyware.
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
A transcrição abaixo parece ser do grupo que os irmãos Máximo mantém para se comunicar e foi interceptada por nosso spyware.
                    <br/><br/>
                    <div className="intercepted-message">
                        Catarina {arrowRight} Manos, segui as dicas do Bruno e consegui decifrar o Pustaha inteiro. Além daquela data o documento tem várias informações sobre como funcionam os fragmentos. Precisamos conversar pessoalmente!
                        <br/><br/>
                        Janaína {arrowRight} Não podemos falar disso por aqui… Viktor já nos disse que nossas comunicações estão sendo interceptadas.
                        <br/><br/>
                        Bruno {arrowRight} Sabia que meu aparelho de vinil ia servir para alguma coisa. Olha só o que eu recebi pelo correio!
                        <br/><br/>
                        <img style={{width: '100%'}} src='./img/sdfsedfeds.png'/>
                        <br/><br/>
                        Catarina {arrowRight} Música numa hora dessas?
                        <br/><br/>
                        Bruno {arrowRight} É uma gravação de “Telegrama Musical” , de Waldir Silva. Estou tentando entender ainda, mas acho que a capa quer dizer alguma coisa.
                        <br/><br/>
                        Janaína {arrowRight} Bruno, olha a hora, você vai perder o seu vôo… (de novo)
                    </div>
                    <br/><br/>
                    <div className="dossie-title" style={{textAlign: 'center'}}>Acho que vamos precisar de mais informações antes de decifrar essa, agente242. Boa sorte.</div>
                    </>
                )
            }
        }
    }     
    
    const msg4 = (preview) => {
        if (unlocked.includes("c4")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c4") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Como gostaríamos que todo investigado fosse tão descuidado quanto Catarina!
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Estimado agente242,
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
                    </>
                )
            }
        }
    }     
    
    const msg3 = (preview) => {
        if (unlocked.includes("c3")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c3") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Você conseguiu mais uma vez! Graças à sua descoberta, pudemos identificar que essa página encontrada no Alabama pertence ao diário de Catarina:
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Prezado agente242,
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
                    </>
                )
            }
        }
    }     
    
    const msg11 = (preview) => {
        if (unlocked.includes("c3")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c3") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                        Aqui está a íntegra do telegrama que você decifrou. Parabéns pelo belo trabalho, agente242.
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Prezado agente242,
                    <br/><br/> Aqui está a íntegra do telegrama que você decifrou. Parabéns pelo belo trabalho, agente242.
                    <br/><br/>
                    <div className="intercepted-message">
                        MINHA QUERIDA IRMA. 
                        <br/><br/>    
                        PRECISO DE AJUDA. 
                        <br/><br/>    
                        ANOS NA PRISAO MAS ESCAPEI. 
                        <br/><br/>    
                        OS FRAGMENTOS PODEM DESTRUIR AS CRIATURAS.
                        <br/><br/>    
                        JANAINA DEVE IR AO CORREIO EM MAPUTO.
                        <br/><br/>    
                        BRUNO SABERA O CODIGO.
                        <br/><br/>    
                        MESIGACATARINANOINSTAGRAM.             
                    </div>
                    </>
                )
            }
        }
    }     
    const msg2 = (preview) => {
        if (unlocked.includes("c2")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c2") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Excelente trabalho, agente242. Parece que Catarina esteve mesmo no Brasil.    
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Excelente trabalho, agente242. 
                <br/><br/>Parece que Catarina esteve mesmo no Brasil. Sabendo disso, invadimos o banco de dados dos Correios brasileiros e encontramos esse estranho telegrama, deixado para Catarina enquanto ela esteve em Belém:
                <br/><br/>
                <div className="intercepted-message"
                style={{lineBreak: 'anywhere'}}>
                    HLQAHNHSQGKMGQAU.
                    <br/><br/>
                    GTKJYEBSKHZHKM.
                    <br/><br/>
                    VKSUKVGTYEUNAUTDKZUHHJ.
                    <br/><br/>
                    SUXBPVHDRKSUURKDLMDTPTHYNPKZQGPKPOUK
                    <br/><br/>
                    CHKVVQMKKIHJNPNZRQQTYQDHAUHPSR.
                    <br/><br/>
                    NQAOSUMNTQUNZNELYR.
                    <br/><br/>
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
                <div className="dossie-title-center">Decifre esse mensagem, agente242. Vamos tentar alcançá-los.</div>
                    </>
                )
            }
        }
    } 
    const msg1 = (preview) => {
        if (unlocked.includes("c1")) {
            if (preview) {
                return (
                    <div style={{display: 'flex'}}>
                        <span className={newMessages && newMessages.includes("c1") ? 'new-icon' : 'none'}>((NEW)) </span>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Ficamos felizes em te ver recuperando o tempo perdido.
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                )
            } else {
                return (
                    <>
Caro agente242,
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
                        <img style={{width: '100%'}} src='./img/adcsgfas.jpg'/>                 
                    </div>
                    <br/><br/>

                        <div style={{textAlign: "center"}} className="dossie-title">
                            Se souber de que dança e qual cidade Catarina está falando, podemos prosseguir as investigações.                            
                        </div>
                    </>
                )
            }
        }
    } 

    return (
        <div className="messages-page">

            <div className={preview ? 'view-messages-preview' : "messages-preview"}>
                <div className={unlocked && unlocked.includes("c10") ? 'message' : 'none'}
                onClick={() => openMessage("c10", 15)}>                                             
                    {msg15(true)}
                </div>


                <div className={unlocked && unlocked.includes("c10") ? 'message' : 'none'}
                onClick={() => openMessage("c10", 10)}>                    
                    {msg10(true)}
                </div>

                <div className={unlocked && unlocked.includes("c5") ? 'message' : 'none'}
                onClick={() => openMessage("c5", 12)}>
                    {msg12(true)}
                </div>
                
                <div className={unlocked && unlocked.includes("c5") ? 'message' : 'none'}
                onClick={() => openMessage("c5", 9)}>                    
                    {msg9(true)}
                </div>

                <div className={unlocked && unlocked.includes("c9") ? 'message' : 'none'}
                onClick={() => openMessage("c9", 14)}>                    
                    {msg14(true)}
                </div>

                <div className={unlocked && unlocked.includes("c9") ? 'message' : 'none'}
                onClick={() => openMessage("c9", 8)}>                    
                    {msg8(true)}
                </div>

                <div className={unlocked && unlocked.includes("c8") ? 'message' : 'none'}
                onClick={() => openMessage("c8", 7)}>                    
                    {msg7(true)}
                </div>

                <div className={unlocked && unlocked.includes("c7") ? 'message' : 'none'}
                onClick={() => openMessage("c7", 6)}>                    
                    {msg6(true)}
                </div>

                <div className={unlocked && unlocked.includes("c6") ? 'message' : 'none'}
                onClick={() => openMessage("c6", 17)}>                    
                    {msg17(true)}
                </div>   

                <div className={unlocked && unlocked.includes("c6") ? 'message' : 'none'}
                onClick={() => openMessage("c6", 5)}>                    
                    {msg5(true)}
                </div> 

                <div className={unlocked && unlocked.includes("c4") ? 'message' : 'none'}
                onClick={() => openMessage("c4", 4)}>                    
                    {msg4(true)}
                </div>

                <div className={unlocked && unlocked.includes("c3") ? 'message' : 'none'}
                onClick={() => openMessage("c3", 3)}>                    
                    {msg3(true)}
                </div>
                <div className={unlocked && unlocked.includes("c3") ? 'message' : 'none'}
                onClick={() => openMessage("c3", 11)}>                    
                    {msg11(true)}
                </div>

                <div className={unlocked && unlocked.includes("c2") ? 'message' : 'none'}
                onClick={() => openMessage("c2", 2)}>                    
                    {msg2(true)}
                </div>

                <div className={unlocked && unlocked.includes("c1") ? 'message' : 'none'}
                onClick={() => openMessage("c1", 1)}>
                    {msg1(true)}
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
                <div className={current == 15 ? 'visible' : 'none'}>
                       {msg15(false)}
                </div>
                <div className={current == 10 ? 'visible' : 'none'}>
                    {msg10(false)}
                </div>
                <div className={current == 7 ? 'visible' : 'none'}>
                    {msg7(false)}
                </div>
                <div className={current == 12 ? 'visible' : 'none'}>
                    {msg12(false)}
                </div>

                <div className={current == 9 ? 'visible' : 'none'}>
                    {msg9(false)}
                </div>
                <div className={current == 14 ? 'visible' : 'none'}>
                    {msg14(false)}
                </div>
                <div className={current == 8 ? 'visible' : 'none'}>
                    {msg8(false)}
                </div>
                <div className={current == 6 ? 'visible' : 'none'}>
                    {msg6(false)}
                </div>
                <div className={current == 17 ? 'visible' : 'none'}>
                    {msg17(false)}
                </div>
                <div className={current == 5 ? 'visible' : 'none'}>
                    {msg5(false)}
                </div>
                <div className={current == 4 ? 'visible' : 'none'}>
                    {msg4(false)}
                </div>
                <div className={current == 11 ? 'visible' : 'none'}>
                    {msg11(false)}
                </div>
                <div className={current == 3 ? 'visible' : 'none'}>
                    {msg3(false)}
                </div>
                <div className={current == 2 ? 'visible' : 'none'}>
                    {msg2(false)}

                </div>
                <div className={current == 1 ? 'visible' : 'none'}>
                    {msg1(false)}
                </div>
                <div className={current == 0 ? 'visible' : 'none'}>
                    Atenção!<br/><br/>Nosso sistema detectou atividades suspeitas na sua conta. Como medida de segurança, sua senha será alterada a cada nova atualização do banco de dados.<br/><br/>Caso haja alguma tentativa de logar utilizando uma senha antiga, os dados mais recentes da investigação serão ocultados.<br/><br/>
                </div>

            </div>
        </div>
    );
  }
  
  export default Messages;