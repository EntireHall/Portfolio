import React from 'react'
import Form from './Form/Form';
import { FaPhone} from "react-icons/fa6";
import Project from "../Project/Project"

export default function Contact() {


  function Red({col,dun})
  {
    return<div className='flex'>
      <div className='text-green-600 pr-2'>{col}</div>
      <span>{dun}</span>
    </div>
  }

  return (
    <>
    <div className='bg-zinc-950 flex-wrap min-h-screen flex-col px-4'>
      <div className='text-white font-pop'>
    <div className='flex  flex-col items-center pt-20'>
    <div className='text-5xl text-green-700 font-pop font-extrabold mb-10'>GET IN TOUCH</div>
    <Red col="Phone:" dun="+91-7710448775"/>
    <Red col="Email:" dun="KK23223511@gmail.com"/>
    <Red col="Address:" dun="#20, Vikasnagar, Maulijagran, Chandigarh, 160102"/>
    </div>
    </div>
    <div className='flex justify-center'>
      <Form/>

    </div>
    
    </div>
 
  <Project/> 
 </>   
  )
}
