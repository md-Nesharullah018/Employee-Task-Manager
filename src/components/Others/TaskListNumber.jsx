
import React from 'react';

const TaskListNumber = ({ data }) => {

  const tasks = data.tasks || [];

  const newTask = tasks.filter(t => t.newTask).length;
  const completed = tasks.filter(t => t.completed).length;
  const active = tasks.filter(t => t.active).length;
  const failed = tasks.filter(t => t.failed).length;

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      
      <div className='rounded-xl w-[45%] py-4 px-6 bg-green-900'>
        <h2 className='text-xl font-medium'>{newTask}</h2>
        <h3>New Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-5 px-6 bg-blue-400'>
        <h2 className='text-xl font-medium'>{completed}</h2>
        <h3>Completed Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-4 px-6 bg-amber-900'>
        <h2 className='text-xl font-medium'>{active}</h2>
        <h3>Accepted Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-4 px-6 bg-indigo-600'>
        <h2 className='text-xl font-medium'>{failed}</h2>
        <h3>Failed Task</h3>
      </div>

    </div>
  );
};

export default TaskListNumber;