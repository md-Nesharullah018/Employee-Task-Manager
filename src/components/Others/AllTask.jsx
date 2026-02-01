
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <section className="mt-10">

      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text 
        bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400">
        Employee Task Dashboard
      </h2>


      <div className="rounded-3xl overflow-hidden border border-white/10 
        bg-gradient-to-br from-[#0f172a]/80 via-[#020617]/80 to-[#020617]/90 
        backdrop-blur-xl shadow-[0_0_40px_rgba(56,189,248,0.15)]">

        <div className="grid grid-cols-5 px-6 py-4 text-sm uppercase tracking-wider
          bg-white/5 text-slate-300">
          <span>Employee</span>
          <span className="text-cyan-400 text-center">New</span>
          <span className="text-indigo-400 text-center">Active</span>
          <span className="text-emerald-400 text-center">Completed</span>
          <span className="text-rose-400 text-center">Failed</span>
        </div>

        <div className="divide-y divide-white/10">
          {userData.map((user, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 px-6 py-5 items-center text-white
              hover:bg-white/5 hover:shadow-[inset_0_0_20px_rgba(56,189,248,0.1)]
              transition-all duration-300"
            >
              <div className="flex items-center gap-3 font-semibold text-lg">
                <span className="h-9 w-9 rounded-full bg-gradient-to-r 
                  from-cyan-400 to-indigo-400 flex items-center justify-center text-black">
                  {user.firstName.charAt(0)}
                </span>
                {user.firstName}
              </div>

              <div className="text-cyan-400 font-bold text-center text-lg">
                {user.taskCounts.newTask}
              </div>

              <div className="text-indigo-400 font-bold text-center text-lg">
                {user.taskCounts.active}
              </div>

              <div className="text-emerald-400 font-bold text-center text-lg">
                {user.taskCounts.completed}
              </div>

              <div className="text-rose-500 font-bold text-center text-lg">
                {user.taskCounts.failed}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTask;
