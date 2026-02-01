
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

    setUserData(
      userData.map((u) =>
        u.firstName === assignTo
          ? {
              ...u,
              tasks: [...(u.tasks || []), task],
              taskCounts: {
                ...u.taskCounts,
                newTask: u.taskCounts.newTask + 1,
              },
            }
          : u
      )
    );

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="rounded-2xl bg-[#020617]/80 border border-slate-700 shadow-xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        Create New Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <Input label="Task Title" value={taskTitle} setValue={setTaskTitle} />
        <Input label="Assign To" value={assignTo} setValue={setAssignTo} />
        <Input label="Category" value={category} setValue={setCategory} />
        <Input type="date" label="Due Date" value={taskDate} setValue={setTaskDate} />

        <div className="md:col-span-2">
          <label className="text-sm text-slate-400 mb-1 block">
            Task Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-28 rounded-lg bg-[#020617] border border-slate-700 p-3 text-white outline-none focus:border-emerald-500 transition"
            placeholder="Write task details..."
          />
        </div>

        <div className="md:col-span-2">
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 transition py-3 rounded-lg text-white font-medium">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({ label, value, setValue, type = "text" }) => (
  <div>
    <label className="text-sm text-slate-400 mb-1 block">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full rounded-lg bg-[#020617] border border-slate-700 px-3 py-2 text-white outline-none focus:border-emerald-500 transition"
    />
  </div>
);

export default CreateTask;
