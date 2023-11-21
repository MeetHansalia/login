import Layout from "@/components/Layout";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";



function HomePage(){

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