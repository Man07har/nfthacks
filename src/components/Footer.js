import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 h-[200px] text-white'>
    <div className='top_most'>
    <div className="flex mx-[300px] ">
        <div className='left px-20'>
       <h1 className='font-bold text-3xl'>Help</h1>
       <div >
        <h2>Videos</h2>
       </div>
        </div>
        <div className='center px-20'>
        <h1 className='font-bold text-3xl'>Community</h1>
        <div>
        <h2>Blogs</h2>
       </div>

        </div>
        <div className='right px-20'>
       <h1 className='font-bold text-3xl'>Developers</h1>
       <div>
        <h2> API</h2>
        <h2>Forum</h2>
       </div>

        </div>
    </div>
  <hr />
    </div>
    <div className="bottom_most flex mx-[300px] my-[40px]">
<div className='px-20'>
<h1>Terms Of Service</h1>
</div>
<div className='px-20'>
<h1>Privacy</h1>
</div>
<div className='px-20'>
<h1>Content Policy</h1>
</div>
    </div>
 
 </div>
  )
}

export default Footer