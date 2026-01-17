
import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="text-white flex-shrink-0 h-full w-[300px] p-5 bg-cyan-800 rounded-xl">

      <div className="flex justify-between items-center">
        <h3 className="bg-red-800 text-sm px-3 py-1 rounded-xl">
          {data.category}
        </h3>
        <h4 className="text-sm">
          {data.taskDate}
        </h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">
        {data.taskTitle}
      </h2>

      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>

      <button className="mt-4 bg-green-600 px-4 py-2 rounded">
        Accept Task
      </button>

    </div>
  );
};

export default NewTask;

