import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex bg-gray-900 w-auto'>
        <div className='mx-40'>
         <img src="src\components\Images" alt=" logo " className='h-9' />
    </div>
      <div className='bg-gray-900 h-10  text-white my-auto mx-[700px] flex '>
        <Link to='src\components\Home.js' className='px-2 hover:py-3 hover:bg-gray-800  py-2 hover:border-1 hover:rounded-md '>Home</Link>
        <Link to='src\components\About.js' className='px-2 hover:py-3 hover:bg-gray-800 py-2 hover:border-1 hover:rounded-md '>About</Link>
        <Link to='src\components\Blogs.js' className='px-2 hover:py-3 hover:bg-gray-800 py-2 hover:border-1 hover:rounded-md '>Blogs</Link>
    </div>
    </div>
  )
}

export default Navbar;