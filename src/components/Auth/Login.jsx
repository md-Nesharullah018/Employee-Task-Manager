import React, { useState } from 'react'


const Login = ({handleLogin}) => {

    const [email, setEmial] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e)=>{
        // console.log("Email is", email)
        // console.log("Password is", password)
        e.preventDefault();
        handleLogin(email, password)
        setEmial("")
        setPassword("")
    }

  return (
    <div className='cursor-pointer bg-black flex h-screen w-screen items-center justify-center'>
        <div className='rounded-xl border-2 border-emerald-600 p-15'>
            <form 
            onSubmit={(e)=>{
                e.preventDefault()
                submitHandler(e)
            }}
              className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmial(e.target.value)
                }}
                required 
                className='text-red-900 outline-none bg-transparent border-2 border-emerald-700 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Entere your email'
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className=' text-red-900 outline-none bg-transparent border-2 border-emerald-700 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-gray-400' type="password" placeholder='Enter your password'
                />
                <button className='text-white border-none outline-none border-2 bg-emerald-700 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-white'>Login</button>
            </form>
        </div>  
    </div>
  )
}

export default Login

