import React from 'react'





const Layout =({children})=>{
    return(
        <div>
            <header >
                <h1>Authentication App</h1>
            </header>
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}

export default Layout