import React, {  useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';


const validationSchema = yup.object().shape({
  email:yup
    .string()
    .trim()
    .required('Email is required')
    .email('Please enter a valid email address'),
  username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(2,'Username must be at least 2 characters')
    .max(16,'Username must be below 16 characters')
    .matches(/^[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*$/, 'Username must contain at least one letter'),
  password: yup
    .string()
    .trim()
    .required('Passowrd is required')
    .min(6,'Password must be at least 6 characters')
    .max(16,'Username must be below 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/,
      'Password must meet the criteria: at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*), and be at least 6 characters long'
    ),
  confirmPassword:yup
    .string()
    .trim()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'),null],'Password do not match'),
});



const RegisterForm = ({onRegister}) => {
  
  const router = useRouter()
  
  const {register, handleSubmit, formState:{errors}, watch,trigger}= useForm({resolver: yupResolver(validationSchema),})
 
  const onSubmit = async(data)=>{
    try {
      const response =  await fetch('/api/auth/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body:JSON.stringify(data),
      });
    
      
      if(response.ok){
        const responseData = await response.json();
        onRegister(responseData);
        localStorage.setItem("isLogin", 0);
        router.push('/')
      }else{
        console.error('Registration failed')
      }
    } catch (error) {
      console.error('Registration error:', error)
    }
  }
  
  useEffect(()=>{
    console.log("Current path:", router.pathname)
    
    const isLoginValue = localStorage.getItem('isLogin');
    console.log("isLoginValue", typeof isLoginValue)
    
    if (isLoginValue !== "1" && router.pathname !== '/register') {
      router.push('/register');
      alert('You need to register');
    }
  },[router.pathname])
  
  
  
  const password = watch('password', '') 
  
  
 
  return(
     <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-80">
       <div className="relative rounded-lg shadow w-full p-4 w-full max-w-md max-h-full rounded-lg shadow dark:bg-gray-700 ">
         {/* <!-- Modal header --> */}
         <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Login to our Site
           </h3>
         </div>
         {/* <!-- Modal body --> */}
         <div className="p-4 md:p-5">
           <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
             <div>
               <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  {...register('email')}
                  type="email"
                  name="email"
                  id="email"
                  className={`${ errors.email ? 'border-red-500' : ''} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                  placeholder="name@company.com"
                  required
                  
                />
                {errors.email && (<p className="text-red-500 text-xs mt-1">{errors.email.message || 'Invalid email'}</p>)}
             </div>
             <div>
               <label
                 htmlFor="username"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                 Your UserName
               </label>
               <input
                //  onChange={(e) => setUsername(e.target.value)}
                 type="text"
                //  value={username}
                 {...register('username')}
                 name="username"
                 id="username"
                 className={`${ errors.username ? 'border-red-500':''} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                 placeholder="User Name"
                 required
                 
               />
               { errors.username && <p className='text-red-500 text-xs mt-1'>{errors.username.message || 'Invalid username'}</p>}
             </div>
             <div>
               <label
                 htmlFor="password"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                 Your password
               </label>
               <input               
                {...register('password')}
                 type="password"
                 name="password"
                 placeholder="••••••••"
                 className={`${ errors.password ? 'border-red-500':''} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                 required
                
               />
               {errors.password  && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
             </div>
             <div>
               <label
                 htmlFor="confirm password"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                 Confirm Your password
               </label>
               <input
                 type="password"
                 name="confirmPassword"
                 placeholder="••••••••"
                 id="confirmPassword"
                 {...register('confirmPassword')}                
                 className={`${ errors.confirmPassword ? 'border-red-500':''} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                 required
               />
                { errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
             </div>
             <button
               type="submit"
               className="w-full text-black bg-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
             >
               Create Account
             </button>
             <div className="text-sm font-medium text-gray-500 dark:text-white text-center">
              <Link href="/" className="text-white-700  hover:underline">
                Login Page
              </Link>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
 }

 export default RegisterForm;



