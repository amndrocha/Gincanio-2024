import { useEffect, useState } from 'react'
import './App.css'
import Map from './Map'
import Messages from './Messages'
import Account from './Account'
import { supabase } from './supabaseClient'

function App() {

  const initialCountries = [
    {
      locked: true,
      id: '0',
    },
    {
      locked: true,
      id: '1',
    },
    {
      locked: true,
      id: '2',
    },
    {
      locked: true,
      id: '3',
    },
    {
      locked: true,
      id: '4',
    },
    {
      locked: true,
      id: '5',
    },
    {
      locked: true,
      id: '6',
    },
    {
      locked: true,
      id: '7',
    },
    {
      locked: true,
      id: '8',
    },
    {
      locked: true,
      id: '9',
    },  
  ];

  const initialMessages = [
    {
      locked: true,
      read: false,
      id: '0',
    },
    {
      locked: true,
      read: false,
      id: '1',
    },
    {
      locked: true,
      read: false,
      id: '2',
    },
  ];

  const [loading, setLoading] = useState(false);
  const [newProfile, setNewProfile] = useState(false);

  
  async function getProfile() {
    const { data, error } = await supabase
      .from('profiles')
      .select(`countries`)
      .eq('id', localStorage.getItem('id'))
      .single()
    if (error) {
      console.warn(error)
    } else if (data) {
      localStorage.setItem('countries', JSON.stringify(data.countries));
    }
  }

  window.addEventListener('id', () => {
    getProfile();
})
  
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
