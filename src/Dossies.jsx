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
                <div className='message' onClick={() => openMessage(1)}>
                    <div style={{display: 'flex'}}>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            ????
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
                <div className='message' onClick={() => openMessage(4)}>                    
                    <div style={{display: 'flex'}}>
                        <div style={{textOverflow: 'ellipsis', width: '100%', overflow: 'hidden'}}>
                            Raposo e Daniela
                        </div>
                        <div className="mobile-icon"></div>
                    </div>
                </div>


            </div>
            <div className={preview ?  'current-message' : "view-current-message"}>
                <div className="return" onClick={() => setPreview(true)}></div>
                <div className="diviser"></div>

                <div className={current == 1 ? 'visible' : 'none'}>
                    ????
                </div>
                <div className={current == 5 ? 'visible' : 'none'}>
                    <div className="Dossie">
                        <img className="dossieImg" src='./img/catarina.png'/>
                        <div><span>Nome completo: </span></div>
                        <div><span>Data de nascimento: </span></div>

                    </div>
                </div>
                <div className={current == 3 ? 'visible' : 'none'}>
                    Janaína
                </div>
                <div className={current == 2 ? 'visible' : 'none'}>
                    Bruno
                </div>
                <div className={current == 4 ? 'visible' : 'none'}>
                    Raposo e Daniela
                </div>
            </div>
        </div>
    );
  }
  
  export default Dossies;