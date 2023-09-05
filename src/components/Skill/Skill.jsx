import React from 'react'
import {SiJavascript,SiHtml5,SiCss3,SiReact,SiTailwindcss,SiMysql,SiPhp} from 'react-icons/si'
import Skillbar from './Skillbar'
import Contact from "../Contact/Contact"

export default function Service() {
  return (
   <>
    <div  className='min-h-screen bg-zinc-950 py-6   flex justify-start flex-wrap flex-col '>
<h1 className=' font-pop text-center text-green-700 font-bold text-5xl mb-20 md:mt-20 transition-colors delay-100 duration-100 hover: stroke-red-700 mix-blend-screen'>My Skill Sets</h1>

<div className='flex gap-4 justify-center  flex-wrap '>

          <div className=' grid justify-center items-center rounded-md h-32 w-32  transition-all duration-150 delay-75 ease-in hover:scale-110 hover:border-4 border-slate-600 '>  
           <div className='bg-red-600 text-6xl p-3'> <SiJavascript /></div>
            <h5 className='text-green-900  font-pop  flex justify-center hover:text-green-400'>Javascript</h5>
          </div>

          <div className=' grid justify-center items-center rounded-md h-32 w-32  transition-all duration-150 delay-75 ease-in hover:scale-110 hover:border-4 border-slate-600 '>  
           <div className='bg-yellow-700 text-6xl p-3'> <SiHtml5 /></div>
            <h5 className='text-green-900  font-pop  flex justify-center hover:text-green-400'>Html</h5>
          </div>

          <div className=' grid justify-center items-center rounded-md h-32 w-32  transition-all duration-150 delay-75 ease-in hover:scale-110 hover:border-4 border-slate-600 '>  
           <div className='bg-cyan-700 text-6xl p-3'> <SiCss3 /></div>
            <h5 className='text-green-900  font-pop flex justify-center hover:text-green-400'>Css</h5>
          </div>

           <div className=' grid justify-center items-center rounded-md h-32 w-32  transition-all duration-150 delay-75 ease-in hover:scale-110 hover:border-4 border-slate-600 '>  
           <div className='bg-orange-700 text-6xl p-3'> <SiReact /></div>
            <h5 className=' text-green-900  font-pop flex justify-center  hover:text-green-400'>React</h5>
          </div>

          <div className=' grid justify-center items-center rounded-md h-32 w-32  transition-all duration-150 delay-75 ease-in hover:scale-110 hover:border-4 border-slate-600'>  
           <div className='bg-indigo-700 text-6xl p-3'> <SiTailwindcss /></div>
            <h5 className='text-green-900  font-pop flex justify-center hover:text-green-400'>Tailwind</h5>
          </div>

          <div className=' grid justify-center items-center rounded-md h-32 w-32  transition-all duration-150 delay-75 ease-in hover:scale-110 hover:border-4 border-slate-600 '>  
           <div className='bg-green-700 text-6xl p-3'> <SiPhp /></div>
            <h5 className='text-green-900  font-pop flex justify-center hover:text-green-400'>Php</h5>
          </div>

          <div className=' grid justify-center items-center rounded-md h-32 w-32  transition-all duration-150 delay-75 ease-in hover:scale-110 hover:border-4 border-slate-600 '>  
           <div className='bg-fuchsia-700 text-6xl p-3'> <SiMysql /></div>
            <h5 className='text-green-900  font-pop flex justify-center hover:text-green-400 '>Sql</h5>
          </div>
         
</div>
<div className='md:mt-10 mix-blend-screen pb-10 '><Skillbar/></div>
</div>
   

<Contact/>
</>  
  )
}