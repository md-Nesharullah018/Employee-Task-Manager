import React from 'react'
import { data } from 'react-router-dom'

const FaildTask = () => {
  return (
    <div className=" text-white flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl">
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-800 text-sm px-3 py-1 rounded-xl'> {data.category} </h3>
        <h4 className='text-sm'> {data.taskDate} </h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'> {data.taskTitle} </h2>
    <p className='text-sm mt-2'>
    {data.taskDescription}
    </p>
    <div className='mt-4'>
        <button className='w-full bg-amber-700'>Failed</button>
    </div>
</div>
  )
}

export default FaildTask
