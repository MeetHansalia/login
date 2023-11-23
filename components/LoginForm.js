import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';



const LoginForm = ({ onLogin, userData }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  
  const handleLogin = async (e) => {
    e.preventDefault();
    var userData1 = localStorage.getItem("userData");
    // var isLogin = localStorage.setItem("isLogin",1)
    
    var userData = JSON.parse(userData1);
    try{
        const response = await fetch('/api/auth/login', {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({userName, password, userData}),
        });
        console.log('Login S', response);
        if(response.ok){
          const data = await response.json();          
          localStorage.setItem('isLogin', 1);
          onLogin({data});
          console.log('loged in')
          router.push('/dashboard')
          toast.success('Successfully Logged In')
        }else{
          console.error('Login failed')
          localStorage.setItem('isLogin', 0);
          toast.error('InValid Username & Password, Plz check')
        }
    }catch(error){
      console.error('Login error:', error);
      
    }
    onLogin({ userName, password });
  };
  

  return (
    <div className="fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="relative bg-white rounded-lg shadow w-full max-w-md rounded-lg shadow dark:bg-gray-700 ml-40">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
           Login to our Site
          </h3>
        </div>
        {/* <!-- Modal body --> */}
        <div className="p-4 md:p-5">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your UserName
              </label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                value={userName}
                name="userName"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="User Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-black bg-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login to your account
            </button>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-white ">
              If not Registered{' '}
              <Link href="/register" className="text-white-700 hover:underline">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;