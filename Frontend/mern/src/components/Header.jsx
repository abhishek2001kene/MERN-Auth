import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-slate-800 flex justify-between py-3 px-32 items-center '>
       <Link>
       <div className='text-white'>
            Auth App
        </div>
       </Link>
        <ul className='flex justify-between p-4 gap-10 text-white items-center'>
            <Link to='/'>Home</Link>
            <Link to='login'>Login</Link>
            <Link to="signup">Sign Up</Link>
        </ul>
    </div>
  )
}

export default Header