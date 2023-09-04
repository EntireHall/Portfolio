import React from 'react'
import Record from './Record.json'
function Rand({hell,div})
{
  return<div className='text-slate-300 pl-10 text-2xl font-pop text-center mb-2.5 '>

      <h1 className='font-bold text-green-700 '>{hell}</h1>
      <span className=' text-lg'>{div}</span>

  </div>
}

export default function Service() {

  return (
    
     <div className='min-h-screen bg-zinc-950  flex justify-center items-center flex-wrap flex-col gap-4  '  >

<h1 className='text-6xl font-pop font-extrabold text-slate-200 p-4 mb-10 mt-28 '>Projects Made  </h1>
    {
      Record.map((data,index) => (

<div className='flex p-2 sm:max-w-[60%] border-4 border-green-800 pr-7 transition ease-in duration-300 delay-200 hover:bg-gradient-to-r from-zinc-950 to-zinc-800 via-zinc-950' key={index} >
        
        
          <img src={data.image} className='w-[340px] h-[399px] max-sm:hidden mt-10'/>
         
         <div>
          <Rand hell="Project Name :" div={data.name}/>
          <Rand hell="Tools Used :" div={data.tools}/>
          <Rand hell="About :" div={data.para}/>
          <Rand hell="Source Code :" div={data.code}/>
          <Rand hell="Live demo:" div={data.demo}/>
         </div>

      </div>
      
  
  ))
  
  }
  </div>
  
  )
} 
