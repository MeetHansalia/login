

import Layout from '@/components/Layout'
import RegisterForm from '@/components/RegisterForm'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const index = () => {
  const router = useRouter()
    const handleRegister = (userData)=>{
        localStorage.setItem("userData",JSON.stringify(userData.data));
        localStorage.setItem("isLogin", 0);
    }
    useEffect(()=>{
      console.log("Current path:", router.pathname)
      
      const isLoginValue = localStorage.getItem('isLogin');
      console.log("isLoginValue", typeof isLoginValue)
      
      if (isLoginValue == "1") {
        router.push('/dashboard');
      }
    },[])
    
  return (
   <Layout>
    <RegisterForm onRegister={handleRegister}/>
   </Layout>
  )
}




export default index