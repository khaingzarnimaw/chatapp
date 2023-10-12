import React from 'react'
import Sildebar from '../components/Sildebar'
import Chat from '../components/Chat'
import Chats from '../components/Chats'
import Input from '../components/Input'
import Meassage from '../components/Message'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
    
      <Sildebar/>
      <Chat/>

      </div>
    </div>
  )
}

export default Home
