import React from 'react'

function Resume() {
  return (
    <div className='bg-zinc-950 min-h-screen flex flex-col  items-center flex-wrap max-sm:pr-20'>
      <div className=' text-normal text-green-700 underline underline-offset-4'>
        <h1 className=' font-bold font-pop text-5xl mb-6 mt-20 max-sm:pl-7'>Education</h1>

        <div className='md:pl-[20%] mt-6'>
          <h1 className='text-3xl font-bold mb-6 max-sm:pl-10'>Matriculation:-</h1>
          <p className='text-xl text-slate-300 md:pl-40 max-sm:pl-20'>Government model senior secondary school —Sector-19C Chandigarh —
            Matriculation (10TH) with 62%.</p>
        </div>

        <div className='md:pl-[20%] mt-6'>
          <h1 className='text-3xl font-bold mb-6 max-sm:pl-10'>Intermediate:-</h1>
          <p className='text-xl text-slate-300 md:pl-40 max-sm:pl-20 '>Government model senior secondary school —Sector-23A Chandigarh —
            Intermidiate (12TH) with 77%.
          </p>
        </div>

        <div className='md:pl-[20%] mt-6'>
          <h1 className='text-3xl font-bold mb-6 max-sm:pl-10 '>Graduation:-</h1>
          <p className='text-xl text-slate-300 md:pl-40 max-sm:pl-20'>post graduate government college —Sector-11c Chandigarh —Graduate (BCA)
            with 78%.</p>
        </div>
        <div className='md:pl-[20%] mt-6'>
          <h1 className='text-3xl font-bold mb-6 max-sm:pl-10 '>Certfificate:-</h1>
          <p className='text-xl text-slate-300 md:pl-40 max-sm:pl-20 '>Got 79 percentage in Computer Application 1-Year Course. In which i learnt Photoshop, Coreldraw, MicrosoftOffice.</p>
        </div>

      </div>
    </div>
  )
}

export default Resume
