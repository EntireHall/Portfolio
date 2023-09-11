import React from 'react'
import Record from './Record.json'

function Rand({ hell, div1 }) {
  return <div className='text-slate-300 text-2xl font-pop flex flex-col justify-center flex-wrap items-center text-center px-2 mb-2.5 '>

    <h1 className='font-bold text-green-700 '>{hell}</h1>
    <span className='text-lg'>{div1}</span>

  </div>
}

export default function Service() {

  return (

    <div className=' min-h-screen bg-zinc-950 flex flex-col justify-center items-center flex-wrap gap-10 mix-blend-screen max-sm:px-4'>

      <h1 className='md:text-6xl font-pop font-extrabold text-slate-200  mb-10 md:mt-40 max-sm:text-4xl max-sm:mt-16'>Projects Made  </h1>
      {
        Record.map((data, index) => (

          <div className='grid justify-center items-center border-4 border-green-700 md:max-w-[60%] flex-wrap p-6 max-sm:px-6 ' key={index} >


            <Rand hell="Project Name :" div1={data.name} />
            <Rand hell="Tools Used :" div1={data.tools} />
            <Rand hell="About :" div1={data.para} />

            <div className='grid grid-cols-2 md:gap-[80%] max-sm:gap-28'>
              <a href={data.code}>
              <button className='text-green-600 font-pop font-bold border-2 border-red-600 p-2 w-20 
              transition hover:translate-x-8'>Code </button>
              </a>
              <a href={data.demo}>
              <button className='text-green-600 font-pop font-bold border-2 border-red-600 p-2 w-20 transition duration-100 hover:-translate-x-8'>Demo </button>
              </a>
            </div>

          </div>



        ))

      }
    </div>

  )
} 
