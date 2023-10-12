import React from 'react'
import {BsCameraVideoFill} from "react-icons/bs"
import {FiMoreHorizontal} from "react-icons/fi"
import {AiOutlineUserAdd} from "react-icons/ai"
import Messages from "./Messages";
import Input from './Input';
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Khaing</span>
         <div className="chatIcons">
            <BsCameraVideoFill/>
            <AiOutlineUserAdd/>
            <FiMoreHorizontal/>
         </div>
       <div>  
    </div>

    </div>
    <Messages/>
    <Input/>
    </div>
  )
}

export default Chat
