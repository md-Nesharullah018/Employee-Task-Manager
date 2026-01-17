import React, { useState } from 'react'

const Header = (props) => {



  const logOutUser = ()=>{
    localStorage.setItem('loggedInUse','')
    props.changeUser('')
    
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-white text-2xl forn-medium'>Hello<br /> <span className='3xl font-semibold'>username✋</span> </h1>
      <button onClick={logOutUser} className='bg-red-950 text-white px-5 py-2 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header
