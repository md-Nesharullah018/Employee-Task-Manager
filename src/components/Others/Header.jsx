
import React from "react";

const Header = ({ changeUser, user }) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <header className="w-full mb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-lg">
        <div>
          <h1 className="text-slate-300 text-sm tracking-wide">
            Welcome back,
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
            {user || "Developer"}
            <span className="animate-wave origin-bottom inline-block">👋</span>
          </h2>
        </div>

        <button
          onClick={logOutUser}
          className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition-all duration-300 text-white px-6 py-2.5 rounded-xl shadow-md hover:shadow-red-500/40"
        >
          <span>Logout</span>
          <span className="text-lg">🚪</span>
        </button>

      </div>
    </header>
  );
};

export default Header;
