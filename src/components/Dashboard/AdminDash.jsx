


import React from 'react'
import Header from '../Others/Header'
import Createtask from '../Others/Createtask'
import AllTask from '../Others/AllTask'

const AdminDash = (props) => {
  return (
    <div className="bg-[#1C1C1C] min-h-screen w-full p-8">
      <Header changeUser={props.changeUser}/>
      <Createtask/>
      <AllTask/>
    </div>
  )
}

export default AdminDash


