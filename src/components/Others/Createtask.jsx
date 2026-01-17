
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    //Create task object once
    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Immutable update
    const updatedUsers = userData.map((user) => {
      if (user.firstName === assignTo) {
        return {
          ...user,
          tasks: [...(user.tasks || []), task],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1,
          },
        };
      }
      return user;
    });

    setUserData(updatedUsers);

    // Reset form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full justify-between">
        <div className="w-1/2">
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task title"
            className="w-4/5 mb-4 p-2 bg-transparent border text-white"
          />
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="w-4/5 mb-4 p-2 bg-transparent border text-white"
          />
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            placeholder="Assign to"
            className="w-4/5 mb-4 p-2 bg-transparent border text-white"
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="w-4/5 mb-4 p-2 bg-transparent border text-white"
          />
        </div>

        <div className="w-2/5">
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-40 mb-4 p-2 bg-transparent border text-white"
            placeholder="Task description"
          />
          <button className="w-full bg-emerald-500 py-2 rounded hover:bg-emerald-600">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
