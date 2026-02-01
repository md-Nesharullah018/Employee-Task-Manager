// import React, { useState } from 'react'


// const Login = ({handleLogin}) => {

//     const [email, setEmial] = useState('');
//     const [password, setPassword] = useState('');

//     const submitHandler = (e)=>{
//         // console.log("Email is", email)
//         // console.log("Password is", password)
//         e.preventDefault();
//         handleLogin(email, password)
//         setEmial("")
//         setPassword("")
//     }

//   return (
//     <div className='cursor-pointer bg-black flex h-screen w-screen items-center justify-center'>
//         <div className='rounded-xl border-2 border-emerald-600 p-15'>
//             <form 
//             onSubmit={(e)=>{
//                 e.preventDefault()
//                 submitHandler(e)
//             }}
//               className='flex flex-col items-center justify-center'>
//                 <input 
//                 value={email}
//                 onChange={(e)=>{
//                     setEmial(e.target.value)
//                 }}
//                 required 
//                 className='text-red-900 outline-none bg-transparent border-2 border-emerald-700 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Entere your email'
//                 />
//                 <input
//                 value={password}
//                 onChange={(e)=>{
//                     setPassword(e.target.value)
//                 }}
//                 required 
//                 className=' text-red-900 outline-none bg-transparent border-2 border-emerald-700 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-gray-400' type="password" placeholder='Enter your password'
//                 />
//                 <button className='text-white border-none outline-none border-2 bg-emerald-700 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-white'>Login</button>
//             </form>
//         </div>  
//     </div>
//   )
// }

// export default Login



// import React, { useState } from "react";

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     handleLogin(email, password);
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-[#05050f] text-white">

//       {/* Animated background grid */}
//       <div className="absolute inset-0 bg-[radial-gradient(#22c55e22_1px,transparent_1px)] [background-size:30px_30px] animate-bgMove" />

//       {/* Floating orbs */}
//       <div className="absolute w-96 h-96 bg-emerald-500/30 blur-[120px] rounded-full -top-20 -left-20 animate-float" />
//       <div className="absolute w-96 h-96 bg-cyan-500/30 blur-[120px] rounded-full bottom-0 right-0 animate-float delay-2000" />

//       {/* Main container */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_120px_rgba(34,197,94,0.25)]">

//           {/* Left Visual Section */}
//           <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-emerald-600/20 to-cyan-600/10">
//             <h1 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//               Welcome Back
//             </h1>
//             <p className="mt-4 text-gray-300 text-lg">
//               Login to access your secure dashboard and manage everything in one place.
//             </p>
//           </div>

//           {/* Right Login Form */}
//           <div className="p-8 sm:p-10">
//             <h2 className="text-3xl font-bold mb-2">Sign In</h2>
//             <p className="text-gray-400 mb-8">Enter your credentials</p>

//             <form onSubmit={submitHandler} className="space-y-6">

//               {/* Email */}
//               <div className="relative group">
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="peer w-full rounded-xl bg-transparent border border-white/20 px-4 py-4 outline-none focus:border-emerald-400 transition"
//                 />
//                 <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-400 peer-valid:-top-2 peer-valid:text-xs">
//                   Email address
//                 </label>
//               </div>

//               {/* Password */}
//               <div className="relative">
//                 <input
//                   type={show ? "text" : "password"}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="peer w-full rounded-xl bg-transparent border border-white/20 px-4 py-4 outline-none focus:border-emerald-400 transition pr-12"
//                 />
//                 <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-400 peer-valid:-top-2 peer-valid:text-xs">
//                   Password
//                 </label>
//                 <button
//                   type="button"
//                   onClick={() => setShow(!show)}
//                   className="absolute right-4 top-4 text-gray-400 hover:text-emerald-400"
//                 >
//                   {show ? "🙈" : "👁️"}
//                 </button>
//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="relative w-full py-4 rounded-xl font-semibold overflow-hidden group"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300"></span>
//                 <span className="relative z-10">Login</span>
//               </button>
//             </form>

//             <p className="text-center text-gray-500 text-sm mt-6">
//               © 2026 • Premium Secure Access
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes float {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(-30px); }
//             100% { transform: translateY(0); }
//           }
//           .animate-float {
//             animation: float 8s ease-in-out infinite;
//           }
//           .delay-2000 {
//             animation-delay: 2s;
//           }
//           @keyframes bgMove {
//             from { background-position: 0 0; }
//             to { background-position: 100px 100px; }
//           }
//           .animate-bgMove {
//             animation: bgMove 20s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     handleLogin(email, password);
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden text-white">

//       {/* 🌈 AURORA BACKGROUND */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-black" />

//       <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-emerald-500/30 rounded-full blur-[140px] animate-aurora" />
//       <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[140px] animate-aurora delay-2000" />
//       <div className="absolute bottom-[-200px] left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[160px] animate-aurora delay-4000" />

//       {/* ✨ Noise Overlay */}
//       <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9ImJsYWNrIi8+PC9zdmc+')]"></div>

//       {/* 🧊 CONTENT */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
//         <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 rounded-[2rem] overflow-hidden backdrop-blur-3xl bg-white/5 border border-white/10 shadow-[0_0_160px_rgba(16,185,129,0.35)]">

//           {/* LEFT VISUAL */}
//           <div className="hidden md:flex flex-col justify-center p-12">
//             <h1 className="text-6xl font-black leading-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               Enter the
//               <br /> Future
//             </h1>
//             <p className="mt-6 text-lg text-gray-300 max-w-md">
//               A next-generation secure login experience with immersive UI design.
//             </p>
//           </div>

//           {/* LOGIN FORM */}
//           <div className="p-8 sm:p-12">
//             <h2 className="text-3xl font-bold mb-2">Sign In</h2>
//             <p className="text-gray-400 mb-8">Welcome back, continue your journey</p>

//             <form onSubmit={submitHandler} className="space-y-6">

//               {/* EMAIL */}
//               <div className="relative">
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="peer w-full rounded-xl bg-white/5 border border-white/15 px-4 py-4 outline-none focus:border-emerald-400 transition"
//                 />
//                 <label className="absolute left-4 top-4 text-gray-400 transition-all text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-400 peer-valid:-top-2 peer-valid:text-xs">
//                   Email address
//                 </label>
//               </div>

//               {/* PASSWORD */}
//               <div className="relative">
//                 <input
//                   type={show ? "text" : "password"}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="peer w-full rounded-xl bg-white/5 border border-white/15 px-4 py-4 outline-none focus:border-emerald-400 transition pr-12"
//                 />
//                 <label className="absolute left-4 top-4 text-gray-400 transition-all text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-400 peer-valid:-top-2 peer-valid:text-xs">
//                   Password
//                 </label>
//                 <button
//                   type="button"
//                   onClick={() => setShow(!show)}
//                   className="absolute right-4 top-4 text-gray-400 hover:text-emerald-400"
//                 >
//                   {show ? "🙈" : "👁️"}
//                 </button>
//               </div>

//               {/* BUTTON */}
//               <button
//                 type="submit"
//                 className="relative w-full py-4 rounded-xl font-semibold overflow-hidden group"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 transition-all duration-500 group-hover:scale-110"></span>
//                 <span className="relative z-10">Login</span>
//               </button>
//             </form>

//             <p className="text-center text-gray-500 text-sm mt-8">
//               © 2026 • Immersive Secure Access
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* 🎞️ Animations */}
//       <style>
//         {`
//           @keyframes aurora {
//             0% { transform: translate(0, 0) scale(1); }
//             50% { transform: translate(60px, -40px) scale(1.1); }
//             100% { transform: translate(0, 0) scale(1); }
//           }
//           .animate-aurora {
//             animation: aurora 12s ease-in-out infinite;
//           }
//           .delay-2000 {
//             animation-delay: 2s;
//           }
//           .delay-4000 {
//             animation-delay: 4s;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-[#050914]">

      {/* Background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#1aff9c22_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/25 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full" />

      {/* Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_0_120px_rgba(16,185,129,0.35)]">

          {/* Left text */}
          <div className="hidden md:flex flex-col justify-center p-12">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="mt-4 text-gray-300 max-w-md">
              Access your secure dashboard and manage everything in one place.
            </p>
          </div>

          {/* Right form */}
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-2">Sign In</h2>
            <p className="text-gray-400 mb-8">Enter your credentials</p>

            <form onSubmit={submitHandler} className="space-y-6">

              {/* EMAIL */}
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  className="peer w-full rounded-xl bg-white/5 border border-white/20 px-4 pt-6 pb-3 outline-none focus:border-emerald-400 transition"
                />
                <label
                  className="
                    absolute left-4 top-4
                    text-gray-400
                    transition-all duration-300
                    peer-placeholder-shown:top-5
                    peer-placeholder-shown:text-base
                    peer-focus:top-2
                    peer-focus:text-xs
                    peer-focus:text-emerald-400
                  "
                >
                  Email address
                </label>
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                  className="peer w-full rounded-xl bg-white/5 border border-white/20 px-4 pt-6 pb-3 outline-none focus:border-emerald-400 transition pr-12"
                />
                <label
                  className="
                    absolute left-4 top-4
                    text-gray-400
                    transition-all duration-300
                    peer-placeholder-shown:top-5
                    peer-placeholder-shown:text-base
                    peer-focus:top-2
                    peer-focus:text-xs
                    peer-focus:text-emerald-400
                  "
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-5 text-gray-400 hover:text-emerald-400"
                >
                  {show ? "🙈" : "👁️"}
                </button>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:scale-[1.02] transition"
              >
                Login
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-8">
              © 2026 • Premium Secure Access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


