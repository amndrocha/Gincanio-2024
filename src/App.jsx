import { useState } from 'react'
import './App.css'
import Map from './Map'
import Messages from './Messages'
import Account from './Account'
import { useSelector } from 'react-redux'

function App() {


  const [current, setCurrent] = useState(localStorage.getItem('page') || 'account');
  const newMessages = useSelector(state => state.message.message);
  const [showPass, setShowPass] = useState(false);
  const password = useSelector(state => state.message.pass);


  const handlePageChange = (page) => {
    localStorage.setItem('page', page);
    setCurrent(page);
    if (page == 'map') {
      location.reload();
    }
  }

  window.addEventListener('news', () => {
    window.dispatchEvent(new Event('pass'));
  });

  window.addEventListener('pass-changed', () => {
    setShowPass(true);
  });


  const preventClick = (e) => {
      e.stopPropagation();
  }

  return (
    <div>  
      <div className={showPass ? "modal" : 'none'} onClick={() => setShowPass(false)}>
          <div style={{textAlign: 'center'}} className="map-modal-window" onClick={(e) => preventClick(e)}>
            A investigação foi atualizada.<br/>Sua nova senha é: {password}
          </div>
      </div>
      <div className='menu'>
          <div className='navlink' onClick={() => handlePageChange('map')}>Mapa</div>
          <div className='navlink' onClick={() => handlePageChange('messages')}>Mensagens {newMessages.length > 0 ? '('+newMessages.length+')' : ''}</div>
          <div className='navlink' onClick={() => handlePageChange('account')}>Conta</div>
      </div>       
      <div className='content'>
        <span className={current == 'map' ? 'visible' : 'none'}><Map/></span>
        <span className={current == 'account' ? 'visible' : 'none'}><Account/></span>
        <span className={current == 'messages' ? 'visible' : 'none'}><Messages/></span>
        <span className={current == '' ? 'visible' : 'none'}></span>          
      </div>
       
    </div>
  )
}

export default App;
