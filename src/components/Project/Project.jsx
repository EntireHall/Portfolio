import React from 'react'
import Record from './Record.json'

function Rand({hell,div1})


{
  return<div className='text-slate-300 text-2xl font-pop text-center md:px-2 mb-2.5 '>

      <h1 className='font-bold text-green-700 '>{hell}</h1>
      <span className='text-lg'>{div1}</span>

  </div>
}

export default function Service() {

  return (
    
     <div>

<h1>Projects Made  </h1>
    {
      Record.map((data,index) => (
<div>
  </div>
     
  
  ))
  
  }
  </div>
  
  )
} 
