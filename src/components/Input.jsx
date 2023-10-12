import React from 'react'
import {MdOutlineAddPhotoAlternate} from "react-icons/md"
import {ImAttachment} from "react-icons/im"
const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something...'/>
    <div className='send'>
     <ImAttachment/>
       <input type="file" style={{display:"none"}} id="file"/>
       <label >
       <MdOutlineAddPhotoAlternate/>
       </label>
       <button>
        Send
       </button>
    </div>
    </div>
  )
}

export default Input
