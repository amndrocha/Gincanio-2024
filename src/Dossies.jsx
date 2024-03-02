import { useState } from "react";
import './Messages.css'

function Dossies() {
    const [current, setCurrent] = useState(-1);

    const [preview, setPreview] = useState(true);

    const openMessage = (message) => {
        setCurrent(message)
        setPreview(false);
    }

    return (
        <div className="messages-page">

            <div className={preview ? 'view-messages-preview' : "messages-preview"}>         
                <div className='message' onClick={() => openMessage(4)}>                    
                    <div style={{display: 'flex'}}>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Raposo e Daniela
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>
                <div className='message' onClick={() => openMessage(3)}>                    
                    <div style={{display: 'flex'}}>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Janaína
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>
                <div className='message' onClick={() => openMessage(2)}>                    
                    <div style={{display: 'flex'}}>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Bruno
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>
                <div className='message'  onClick={() => openMessage(5)}>                    
                    <div style={{display: 'flex'}}>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Catarina
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div> 
                <div className='message' onClick={() => openMessage(1)}>
                    <div style={{display: 'flex'}}>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            ????
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>


            </div>
            <div className={preview ?  'current-message' : "view-current-message"}>
                <div className="return" onClick={() => setPreview(true)}></div>
                <div className="diviser"></div>

                <div className={current == 1 ? 'visible' : 'none'}>
                    <div className="dossie">
                        <div className="dossie-header">
                            <img className="dossie-img" src='./img/helio.jpg'/>                            
                            <div className="dossie-info">
                                <div className="dossie-content"><div className="dossie-title">Nome completo: </div>????</div>
                                <div className="dossie-content"><div className="dossie-title">Data de nascimento: </div>????</div> 
                                <div className="dossie-content"><div className="dossie-title">Interesses: </div>????</div>
                                <div className="dossie-title" style={{color: 'lime'}}> .</div>                              
                            </div>
                        </div>
                        <br/>
                        Muito pouco se sabe sobre esse indivíduo. Acreditamos que ele seja um filho não registrado do casal Raposo e Daniela, mas a única pista que temos é um porta retrato deixado no apartamento do casal com a foto que vemos em anexo. A fotografia está datada de 27 de Janeiro de 2008. No verso da fotografia, nossos agentes encontraram um estranho recado:
                        <br/><br/>
                        <div className="intercepted-message"> 
                            Queridos pais, obrigado pelo presente de aniversário, Parahat me entregou ontem, durante a mudança da guarda.
                            <br/><br/>
                            Sinto-me velho para ainda gostar de super heróis e o Super-Homem nunca foi meu favorito mas confesso que gostei da piada. Acho que eu já esperava algo nesse sentido, vindo de vocês.  Certamente foi mais engraçada que o casaco dourado de lã que vocês mandaram nos meus 18 anos, seus *nerds*. Lembro que na época demorei a entender a referência mitológica, mas dessa vez eu já estava esperando alguma gracinha.
                            <br/><br/>
                            Tenho más notícias. Parahat vai finalmente se aposentar e essa pode ser nossa última troca de mensagens. Nessa minha vida de rato de laboratório, tudo que conheci do mundo lá fora foi graças aos jornais e revistas de Parahat. Os outros funcionários me tratam como se eu fosse um bicho. Se não fosse uma suspeita absurda, eu diria que alguns sequer são seres humanos, pela maneira bizarra com que se comportam.
                            <br/><br/>
                            Hoje Parahat, escondido, conseguiu tirar uma foto minha. Foi o melhor que conseguimos, achei que íamos ser flagrados. Ele também tem bastante medo dos outros funcionários.
                            <br/><br/>
                            Por favor, me tirem daqui.
                            <br/><br/>
                            31 de Janeiro de 2008
                        </div>                   
                        <br/><br/>
                        Pelo teor da mensagem, suspeitamos que 31 de Janeiro seja seu aniversário, mas não sabemos seu nome ou ano de nascimento. Qualquer pista sobre seu passado ou paradeiro é importante.              
                        <br/><br/>
                        <div className="dossie-title" style={{textAlign: 'center'}}>IMPORTANTE</div>
                        <div>Aconteça o que acontecer, não trave contato direto com nenhum dos Máximo.</div>
                    </div>
                </div>
                
                <div className={current == 3 ? 'visible' : 'none'}>
                    <div className="dossie">
                        <div className="dossie-header">
                            <img className="dossie-img" src='./img/janaina.jpg'/>                            
                            <div className="dossie-info">
                                <div className="dossie-content"><div className="dossie-title">Nome completo: </div>Janaína Máximo</div>
                                <div className="dossie-content"><div className="dossie-title">Data de nascimento: </div>11/01/1994</div> 
                                <div className="dossie-content"><div className="dossie-title">Interesses: </div>Geografia, arqueologia</div>
                                <div className="dossie-title" style={{color: 'lime'}}> .</div>                              
                            </div>
                        </div>
                        <br/>
                        Formada em Geografia pela PUC-Rio, Janaina é a primeira filha registrada de Raposo e Daniela e é irmã mais velha de Bruno e Catarina.
                        <br/><br/>
                        Com uma pós graduação em Arqueologia e anos de pesquisa junto ao Museu Nacional, é razoável supor que Janaína tem especial interesse por civilizações antigas e sítios arqueológicos. 
                        <br/><br/>
                        Cartas e recados nas redes interceptados por nossa agência nos levam a crer que Janaína faria tudo por seus irmãos mais novos.                        
                        <br/><br/>
                        <div className="dossie-title" style={{textAlign: 'center'}}>IMPORTANTE</div>
                        <div>Aconteça o que acontecer, não trave contato direto com nenhum dos Máximo.</div>

                    </div>
                </div>
                <div className={current == 5 ? 'visible' : 'none'}>
                    <div className="dossie">
                        <div className="dossie-header">
                            <img className="dossie-img" src='./img/catarina.jpg'/>                            
                            <div className="dossie-info">
                                <div className="dossie-content"><div className="dossie-title">Nome completo: </div>Catarina Máximo</div>
                                <div className="dossie-content"><div className="dossie-title">Data de nascimento: </div>22/02/2001</div> 
                                <div className="dossie-content"><div className="dossie-title">Interesses: </div>Linguística, cinema, viagens</div>
                                <div className="dossie-title" style={{color: 'lime'}}> .</div>                              
                            </div>
                        </div>
                        <div>
                        <br/>
                        Formada em Letras pela PUC-Rio, Catarina é a filha mais jovem do casal Raposo e Daniela Máximo. 
                        <br/>
                        <br/>
                        Além do interesse acadêmico em Linguística e Estudos da Linguagem, suas redes sociais indicam interesses em cinema, viagens e danças folclóricas. Dos três irmãos, Catarina é a mais presente nas redes e a única cujo paradeiro nós temos notícia. Com um pouco de sorte conseguiremos interceptar algumas das comunicações de Catarina, já que ela não parece se preocupar muito com segurança digital.
                        <br/>
                        <br/>
                        Uma de nossas fontes na América do Sul avistou Catarina nas ruas de Buenos Aires.
                        <br/>
                        <br/>
                        Para dar seguimento às investigações, identifique o local no mapa e insira o nome da caçula.
                        <br/>
                        <br/>
                        <div className="dossie-title" style={{textAlign: 'center'}}>IMPORTANTE
                        </div> Aconteça o que acontecer, não trave contato direto com nenhum dos Máximo.</div>
                    </div>
                </div>
                <div className={current == 2 ? 'visible' : 'none'}>
                    <div className="dossie">
                        <div className="dossie-header">
                            <img className="dossie-img" src='./img/bruno.jpg'/>                            
                            <div className="dossie-info">
                                <div className="dossie-content"><div className="dossie-title">Nome completo: </div>Bruno Máximo</div>
                                <div className="dossie-content"><div className="dossie-title">Data de nascimento: </div>31/12/1999</div> 
                                <div className="dossie-content"><div className="dossie-title">Interesses: </div>Filosofia, teologia</div>
                                <div className="dossie-title" style={{color: 'lime'}}> .</div>                              
                            </div>
                        </div>
                        <br/>
                        Formado em Filosofia pela PUC-Rio, Bruno é o terceiro filho do casal Raposo e Daniela.
                        <br/><br/>
                        Não há muitos registros de Bruno além de sua foto de contato, mas seus interesses parecem orbitar na direção do estudo das Religiões. Ao longo de sua graduação, Bruno cursou várias disciplinas eletivas dos departamentos de Teologia e Ciências Sociais.
                        <br/><br/>
                        Não temos, no presente momento, notícias de seu paradeiro, exceto por uma série de guias de viagem sobre o leste asiático registrados em seu histórico de compras online.                        
                        <br/><br/>
                        <div className="dossie-title" style={{textAlign: 'center'}}>IMPORTANTE</div>
                        <div>Aconteça o que acontecer, não trave contato direto com nenhum dos Máximo.</div>
                    </div>
                </div>
                <div className={current == 4 ? 'visible' : 'none'}>
                    <div className="dossie">
                        <div className="dossie-header">
                            <img className="dossie-img" src='./img/raposo.jpg'/>                            
                            <div className="dossie-info">
                                <div className="dossie-content"><div className="dossie-title">Nome completo: </div>Raposo Máximo</div>
                                <div className="dossie-content"><div className="dossie-title">Data de nascimento: </div>01/03/1946</div> 
                                <div className="dossie-content"><div className="dossie-title">Interesses: </div>Química</div>
                                <div className="dossie-title" style={{color: 'lime'}}> .</div>                              
                            </div>
                        </div>
                        <br/>
                        <div className="dossie-header">
                            <img className="dossie-img" src='./img/daniela.jpg'/>                            
                            <div className="dossie-info">
                                <div className="dossie-content"><div className="dossie-title">Nome completo: </div>Daniela Máximo</div>
                                <div className="dossie-content"><div className="dossie-title">Data de nascimento: </div>17/10/1948</div> 
                                <div className="dossie-content"><div className="dossie-title">Interesses: </div>Astrofísica</div>
                                <div className="dossie-title" style={{color: 'lime'}}> .</div>                              
                            </div>
                        </div>
                        <div>
                        <br/>
                        Desaparecidos desde 2019, o casal Raposo e Daniela se conheceu em 1966, num simpósio do Centro Técnico Científico da PUC-Rio. Ele um promissor estudante de Química e ela uma jovem autodidata, faltando aulas de Física Básica para assistir palestras sobre Física Quântica. 
                        <br/>
                        <br/>
                        Com carreiras brilhantes, ambos muito cedo alcançaram renome internacional e, de acordo com nossas investigações, começaram um romance em 1970, após um reencontro incidental fora do país. 
                        <br/>
                        <br/>
                        Trabalhando em colaboração com os discípulos do famoso Dr von Braun, Daniela colaborou em importantes publicações na área da Astrofísica nos anos que antecederam a ida do Homem à Lua, enquanto Raposo consagrou-se como especialista em extração segura de gás natural, tendo trabalhado até 1970 na Universidade Tecnológica de Varsóvia.
                        <br/>
                        <br/>
                        Apesar das investigações depois de seu desaparecimento em 2019, a Interpol e polícia brasileira não tem pistas de seu paradeiro. Nossa organização tem indícios de que o casal está à solta e envolvidos em uma perigosa conspiração internacional. Tudo indica que Raposo e Daniela tem em seu poder um artefato com alto poder destrutivo.
                        <br/>
                        <br/>
                        Agente241, sua missão inicial é localizar e seguir os passos dos membros da família Máximo e, caso descubra onde está o artefato, sua prioridade deve ser recuperá-lo a todo custo.
                        <br/>
                        <br/>
                        <div className="dossie-title" style={{textAlign: 'center'}}>IMPORTANTE
                        </div> Aconteça o que acontecer, não trave contato direto com nenhum dos Máximo.</div>

                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Dossies;