import { useState } from 'react'
import './App.css'
import Map from './Map'
import Messages from './Messages'
import Account from './Account'
import { supabase } from './supabaseClient'

function App() {
  
  window.addEventListener('id', () => {
    let ignore = false
    async function getProfile() {
      const { data, error } = await supabase
        .from('profiles')
        .select(`email, countries, messages`)
        .eq('id', localStorage.getItem('id'))
        .single()

      if (!ignore) {
        if (error) {
          console.warn(error)
        } else if (data) {
          console.log(data);
        }
      }
    }

    getProfile();
    console.log('novo login');

    return () => {
      ignore = true
    };
  });
  
  const [current, setCurrent] = useState(localStorage.getItem('page') || 'account');
  
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
            <div className='navlink' onClick={() => handlePageChange('messages')}>Mensagens</div>
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

export default App
