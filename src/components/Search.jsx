import React from 'react'
import me from "../img/me.jpg"
const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className='userChat'>
         <img src={me} alt="" />
         <div className='userChatInfo'>
            <span>Zar</span>
         </div>
      </div>
    </div>
  )
}

export default Search
