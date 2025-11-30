import React from 'react'
import pic from './profilePic.jpg'

function Foter() {
  return (
    <div className='bg-emerald-600 w-full mt-7 py-50 '>
<div className='mx-20  flex -mt-10 '>
            <img className='w-30 h-30 -mt-15 rounded-full  ' src={pic} alt="About" />
              <span className='-mt-12 ml-9'>
               <p className='text-white font-semibold text-4xl'>Muhammad_Ullah</p>
                <h1 className='text-2xl font-bold text-gray-800 mt-3 '>Full Stake Developer</h1>
                 </span>
                  </div>
                   </div>
  )
}

export default Foter