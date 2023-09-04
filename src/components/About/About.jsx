import React from 'react'
import {Link} from "react-router-dom"
import avatar3 from "../../assets/Image/avatar3.png"

function Bolt({item,det})
{
  return<div className='gap-10 text-slate-400 flex text-lg pb-6  font-pop pl-6' >
      <h1 className='text-green-700'>{item}</h1><span>{det}</span>

  </div>
}

export default function About() {
  return (

        <div className='min-h-screen flex justify-center items-center bg-zinc-950 pl-[15%] max-sm:px-4'>

        <div className='w-[30%]  max-sm:hidden'>
                       <img src={avatar3} className='h-[500px] w-[350px]' />
          </div> 

          <div className=' flex flex-col items-left md:pl-20 md:w-[70%] max-sm:pl-10 '>
          <h1 className='text-5xl font-semibold pb-6 text-green-700 pl-6'>About Me</h1>   
          
          <p className=' text-lg font-pop text-slate-300 md:pr-[30%] text-justify px-7  pb-4'>I am a punctual and motivated individual who is able
           to work in a busy environment and produce high standards of work. 
           I am an excellent team worker and am able to take instructions from all 
           levels and build up good working relationships with all colleagues. I am flexible, 
           reliable and possess excellent time keeping skills..</p>
        
      <div>
      <Bolt item="Name:" det="Kartik"/>
      <Bolt item="Date of birth:" det="28-03-2002"/>
      <Bolt item="Address:" det="#20,Vikas Nagar Chandigarh"/>
      <Bolt item="Zip code:" det="160102"/>
      <Bolt item="Email:" det="kk23223511@gmail.com"/>
      <Bolt item="Phone:" det="+91-7710448775"/>
      </div>

      <div className='pl-60'>
      <Link to="/resume">
                <button  className='text-black bg-green-800 font-bold p-2 rounded mt-10 border-2
                 border-green-800 py-2 transition ease-in duration-300 delay-200 hover:bg-transparent 
                  hover:text-green-800 animate-bounce '>More about me</button>
              </Link>
      </div>
          </div>
          </div>
      
  )
}
