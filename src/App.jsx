import { useState } from 'react'
import './App.css'
import Map from './Map'
import Messages from './Messages'
import Account from './Account'

function App() {


  const [current, setCurrent] = useState(localStorage.getItem('page') || 'account');
  const [newMessages, setNewMessages] = useState(JSON.parse(localStorage.getItem('newMessages')) || []);

  const handlePageChange = (page) => {
    localStorage.setItem('page', page);
    setCurrent(page);
    if (page == 'map') {
      location.reload();
    }
  }
  window.addEventListener('news', () => {
    setNewMessages(JSON.parse(localStorage.getItem('newMessages')));
    console.log('chegou no app: ',newMessages);
  });

  window.addEventListener('remove', () => {
    setNewMessages(JSON.parse(localStorage.getItem('newMessages')));
  });


  return (
    <div>
        <div className='menu'>
            <div className='navlink' onClick={() => handlePageChange('map')}>Mapa</div>
            <div className='navlink' onClick={() => handlePageChange('messages')}>Mensagens {newMessages.length > 0 ? '('+newMessages.length+')' : ''}</div>
            <div className='navlink' onClick={() => handlePageChange('account')}>Conta</div>
        </div>       
        <div className='content'>
          <span className={current == 'map' ? 'visible' : 'invisible'}><Map/></span>
          <span className={current == 'account' ? 'visible' : 'invisible'}><Account/></span>
          <span className={current == 'messages' ? 'visible' : 'invisible'}><Messages/></span>
          <span className={current == '' ? 'visible' : 'invisible'}></span>          
        </div>
       
    </div>
  )
}

export default App;
