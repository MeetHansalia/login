
import { ToastContainer } from 'react-toastify';
import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'; 


function MyApp({Component, pageProps}){
    return(
        <>
          
                <ToastContainer/>
                <Component {...pageProps}/>
            
            
        </>
    )
}

export default MyApp;