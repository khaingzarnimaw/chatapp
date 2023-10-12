import React from 'react'
import me from "../img/me.jpg"
const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
         <img src={me} alt="" />
         <div className='userChatInfo'>
            <span>Zar</span>
            <p>Hello</p>
         </div>
      </div>
      <div className='userChat'>
         <img src={me} alt="" />
         <div className='userChatInfo'>
            <span>Zar</span>
            <p>Hello</p>
         </div>
      </div>
      <div className='userChat'>
         <img src={me} alt="" />
         <div className='userChatInfo'>
            <span>Zar</span>
            <p>Hello</p>
         </div>
      </div>
    </div>
  )
}

export default Chats
