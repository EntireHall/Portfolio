import React from 'react'
import { Link } from 'react-router-dom'
import { BsDownload, BsFolder2Open } from 'react-icons/bs'
import { Type } from './Type'
import Kartik from "../../assets/Image/Kartik.pdf"
import avatar2 from "../../assets/Image/avatar2.png"
import About from "../About/About"

function Button({ icon, title,title1 }) {
  return <div className="flex gap-2 items-center rounded border text-green-800 px-4 py-2 border-green-600 transition duration-500 delay-300 ease-in hover:bg-green-800 hover:border-none hover:text-black font-bold">
    <span>{icon}</span>
    <button>{title}</button>
    
    <button>{title1}</button>
  </div>
}

function Button1({ icon, title,title1 }) {
  return <div className="flex gap-2 items-center rounded text-black  px-4 py-2 bg-green-800 font-bold transition duration-500 delay-300 ease-in hover:bg-transparent hover:border-green-700 hover:border hover:text-green-700">
      <span>{icon}</span>
    <button>{title1}</button>
  </div>
}

export default function Home() {
  return (
    <>
    <div className='flex bg-zinc-950  min-h-screen justify-center items-center md:px-28 max-sm:flex-col mix-blend-screen max-sm:pt-10'>
   
      <div className=' flex flex-col items-left md:pl-20 md:w-[70%]'>
          
            <div className='flex justify-center px-7 font-bold text-slate-400 font-pop flex-col' >
        
              <h1 className='text-6xl max-sm:text-5xl'>Hi,I'm Kartik</h1></div>
             
              <div className='flex  px-7 font-bold text-slate-400 font-pop p-8 text-4xl '>
             <p className='flex gap-2 max-sm:text-2xl'>I am a <span className='text-green-700'><Type/></span></p>
              </div>
         
            <div className=' text-lg font-extrabold font-pop text-slate-400 '>
              <p className=' text-justify px-7 '>I am a Fresher software Developer who is seeking to find the 
              opportunity to work in a fun and challenging working environment that will
               encourage me to improve and learn new and necessary skills
               as well as be motivated by the company to do his best for the sake 
               of helping himself and the company advance in the software industry.</p>
            </div>

            <div className="flex px-7 mt-10  gap-8 ">
              <a href={Kartik} download="resume.pdf">
                <Button1 icon ={<BsDownload />} title1={"Download Resume"} />
              </a>
              <Link to="/project">
                <Button icon={<BsFolder2Open />} title={"View Projects"} />
              </Link>
          </div>
        </div>
        
        <div className='flex md:w-[30%] '>
                       <img src={avatar2} className='h-[500px] w-[350px]' />
          </div> 
       
        </div>
   
        <About/>
</>
  )


}
