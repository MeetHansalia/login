import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className="bg-slate-gray-800">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
              <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Entrepot</span>
              </Link>
        
              <div className="flex space-x-4 ml-auto">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
              </div>
          </div>
      </nav>
    </header>
  )
}


export default Header