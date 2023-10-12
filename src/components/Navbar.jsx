import React from 'react'
import power from '../img/power1.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
     <span className="logo">Khaing Chat</span>
     <div className="user">
        <img src={power} alt="" />
        <span>Khaing</span>
        <button>log out</button>
     </div>
    </div>
  )
}

export default Navbar
