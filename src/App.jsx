import { useState } from 'react'
import './App.css'
import Map from './Map'
import Messages from './Messages'
import Account from './Account'
import { useSelector } from 'react-redux'

function App() {


  const [current, setCurrent] = useState(localStorage.getItem('page') || 'account');
  const newMessages = useSelector(state => state.message.message);

  const handlePageChange = (page) => {
    localStorage.setItem('page', page);
    setCurrent(page);
    if (page == 'map') {
      location.reload();
    }
  }

  return (
    <div>
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
