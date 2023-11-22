import Layout from "@/components/Layout";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';


function HomePage(){
    const router = useRouter();
    useEffect(()=>{
        const isLoginValue = localStorage.getItem('isLogin');
        console.log("isLoginValue", typeof isLoginValue)
        if(isLoginValue !== "1"){
          router.push('/')
        }else{
          router.push('/dashboard')
        }
      },[])
    const handleLogin = (userData)=>{
    }
    
    return(
       <Layout>
            
            <main  className="flex items-center justify-center flex-1">
                <LoginForm onLogin={handleLogin} />
            </main>
            
       </Layout>
    )
}

export default HomePage;