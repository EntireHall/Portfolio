import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {CgMenuHotdog,CgClose} from "react-icons/cg"


function Li({ link, title }) {
    return <Link to={link} smooth duration={800} className="font-semibold text-green-800 hover:underline underline-offset-4 ">
        <li className=''><li className='hover:text-white transition-all duration-200 ease-in-out hover:text-xl'>{title}</li></li>
    </Link>
}

export default function Navbar() {
    const[show, setShow]= useState(false);
    
    
    return (
        
        <div className=" flex justify-around p-4 bg-zinc-950 shadow-md shadow-gray-500 font-pop "> 
            
               <h1 className=' font-bold text-slate-200 text-2xl  animate-pulse w-full px-4 font-Aer'>Portfoilio.</h1>
                
                <ul className={` md:flex md:justify-end gap-10 md:w-full text-lg px-6  ${show ? "sm:flex  md:border-hidden border-b mt-14 px-20  mr-[20%]": "hidden "}` }>
                    <Li link={"/"} title={"Home"} />
                    <Li link={"/about"} title={"About"} />
                    <Li link={"/skill"} title={"Skill"} />
                    <Li link={"/contact"} title={"Contact"} />
                    <Li link={"/project"} title={"Project"}/>
                    
                </ul>
               
                <div>
                        <button onClick={() => setShow(!show)} className='text-white  md:hidden transition ease-in duration-500 delay-200 hover:text-green-600 text-2xl' >
                 
                 {
                        show ? <CgClose/> : <CgMenuHotdog/> 
                } 
                  
                  </button>
                   </div>
                    </div>
           
         
     
    )
}
