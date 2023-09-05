import React from 'react'
import Record from './Record.json'

function Rand({hell,div1})


{
  return<div className='text-slate-300 text-2xl font-pop flex flex-col justify-center items-center text-center px-2 mb-2.5 '>

      <h1 className='font-bold text-green-700 '>{hell}</h1>
      <span className='text-lg'>{div1}</span>

  </div>
}

export default function Service() {

  return (
    
     <div className='flex flex-col justify-center items-center flex-wrap gap-10 min-h-screen bg-zinc-950 mix-blend-screen'>

<h1 className='md:text-6xl font-pop font-extrabold text-slate-200  mb-10 md:mt-40 max-sm:text-4xl max-sm:mt-16'>Projects Made  </h1>
    {
      Record.map((data,index) => (

<div className='border-4 border-green-700 md:max-w-[60%] max-sm:border-none flex-wrap md:p-6' key={index} >
        
       
          <Rand hell="Project Name :" div1={data.name}/>
          <Rand hell="Tools Used :" div1={data.tools}/>
          <Rand hell="About :" div1={data.para}/>
          <Rand hell="Source Code :" div1={data.code}/>
          <Rand hell="Live demo:" div1={data.demo}/>
         </div>

     
  
  ))
  
  }
  </div>
  
  )
} 
