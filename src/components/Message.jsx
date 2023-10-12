import React from 'react'
import power from "../img/power1.jpg"
import me from"../img/me.jpg"
const Meassage = () => {
  return (
    <div className='message owner'>
     <div className="messageInfo">
       <img src={power} alt="" />
       <span>just now</span>
     </div>
     <div className="messageContent">
         <p>hello</p>
         <img src={me} alt="" />
     </div>
    </div>
  )
}

export default Meassage
