import Layout from '@/components/Layout'
import RegisterForm from '@/components/RegisterForm'
import React from 'react'

const index = () => {
    const handleRegister = (userData)=>{
        localStorage.setItem("userData",JSON.stringify(userData.data));
        
    }
    
    
  return (
   <Layout>
    <RegisterForm onRegister={handleRegister}/>
   </Layout>
  )
}



export default index