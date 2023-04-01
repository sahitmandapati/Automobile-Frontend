import React from 'react'
import { Link } from 'react-router-dom'


function NotFound() {
    return (
        <div className='h-screen py-10 px-10 md:px-60 flex flex-col space-y-10'>
            <h1 className='text-3xl text-center font-extrabold'>Sorry, the page you were looking for was not found.</h1>
            <Link className='bg-[#161616]  hover:bg-[#232323] text-white text-center font-bold py-2 px-4 rounded my-2' to='/'><button >Return to home  </button></Link>

        </div>
    )
}

export default NotFound