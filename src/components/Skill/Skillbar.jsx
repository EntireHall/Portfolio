import React from 'react'

function Skillbar() {

  return (
  <div className='flex max-sm:flex-col mix-blend-screen'>
    <div className='w-[50%] max-sm:w-[100%]'>
      <div className='flex-wrap px-7 max-w-[700px] m-auto grid'>
        <div className="flex justify-between text-slate-300 mt-10  "  >
          <div>HTML</div>
          <div>90%</div> </div>
        <div className="bg-green-950 h-[5px] w-[100%]">
          <div className="bg-green-600 h-[5px] w-[90%] "></div>
        </div></div>

      <div className='flex-wrap px-7 max-w-[700px] m-auto grid'>
        <div className="flex justify-between text-slate-300 mt-4  "  >
          <div>CSS</div>
          <div>87%</div> </div>
        <div className="bg-green-950 h-[5px] w-[100%]">
          <div className="bg-green-600 h-[5px] w-[87%] "></div>
        </div></div>

      <div className='flex-wrap px-7 max-w-[700px] m-auto grid'>
        <div className="flex justify-between text-slate-300 mt-4  "  >
          <div>Javascript</div>
          <div>80%</div> </div>
        <div className="bg-green-950 h-[5px] w-[100%]">
          <div className="bg-green-600 h-[5px] w-[80%] "></div>
        </div></div>

      <div className='flex-wrap px-7 max-w-[700px] m-auto grid'>
        <div className="flex justify-between text-slate-300 mt-4  "  >
          <div>React</div>
          <div>90%</div> </div>
        <div className="bg-green-950 h-[5px] w-[100%]">
          <div className="bg-green-600 h-[5px] w-[90%] "></div>
        </div></div>
    </div>

<div className='w-[50%] max-sm:w-[100%]'>
<div className='flex-wrap px-7 max-w-[700px] m-auto grid'>
  <div className="flex justify-between text-slate-300 mt-10  "  >
    <div>Php</div>
    <div>70%</div> </div>
  <div className="bg-green-950 h-[5px] w-[100%]">
    <div className="bg-green-600 h-[5px] w-[70%] "></div>
  </div></div>

<div className='flex-wrap px-7 max-w-[700px] m-auto grid'>
  <div className="flex justify-between text-slate-300 mt-4  "  >
    <div>Sql</div>
    <div>85%</div> </div>
  <div className="bg-green-950 h-[5px] w-[100%]">
    <div className="bg-green-600 h-[5px] w-[85%] "></div>
  </div></div>

<div className='flex-wrap px-7 max-w-[700px] m-auto grid'>
  <div className="flex justify-between text-slate-300 mt-4  "  >
    <div>Java</div>
    <div>72%</div> </div>
  <div className="bg-green-950 h-[5px] w-[100%]">
    <div className="bg-green-600 h-[5px] w-[90%] "></div>
  </div></div>

<div className='flex-wrap px-7 max-w-[700px] m-auto grid'>
  <div className="flex justify-between text-slate-300 mt-4  "  >
    <div>Tailwind</div>
    <div>90%</div> </div>
  <div className="bg-green-950 h-[5px] w-[100%]">
    <div className="bg-green-600 h-[5px] w-[90%]"></div>
  </div></div>
</div>

</div>
  )
}

export default Skillbar
