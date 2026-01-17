// import React from 'react'
// import Header from '../Others/Header'

// const AdminDash = () => {
//   return (
//     <div className='bg-[#1C1C1C] h-screen w-full p-10'>
//       <Header />

//       <div className='text-white'>
//         <form className='flex w-full bg-emerald-700 items-start justify-between'>
//           <div>
//             <div>
//               <h3>Task Title</h3>
//               <input type="text" placeholder='Make a UI desing' />
//             </div>
//             <div>
//             <h3>date</h3>
//               <input type="date" />
//             </div>
//             <div>
//               <h3>Asign to</h3>
//               <input type="text" placeholder='Employee name' />
//             </div>
//             <div>
//               <h3>Category</h3>
//               <input type="text" placeholder='Desing, dev, etc' />
//             </div>
//           </div>
//           <div>
//             <h3>Deccription</h3>
//             <textarea className='bg-amber-50' name="" id="" cols="30" rows="10"></textarea>
//           </div>

//           <button>Create Task</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default AdminDash




import React from 'react'
import Header from '../Others/Header'
import Createtask from '../Others/Createtask'
import Alltask from '../Others/Alltask'

const AdminDash = (props) => {
  return (
    <div className="bg-[#1C1C1C] min-h-screen w-full p-8">
      <Header changeUser={props.changeUser}/>
      <Createtask/>
      <Alltask/>
    </div>
  )
}

export default AdminDash


