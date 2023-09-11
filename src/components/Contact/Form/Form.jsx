import React from 'react'

function Form () {

    function Input({ type, placeholder, name }) {
        return <input type={type} name={name} placeholder={placeholder} required className='bg-transparent rounded border-2 mb-2
         border-red-600 pt-4 p-2 max-sm:pr-20  md:pr-40 outline-none  ' />

    }

    function Input1({ type, placeholder, name }) {
        return <input type={type} name={name} placeholder={placeholder} required className='bg-transparent rounded border-2 mb-2
         border-red-600 pt-4 p-2 md:pr-40 max-sm:pr-20  outline-none pb-40 max-sm:mr-4' />
    }

        

    return (

        <form action="https://getform.io/f/a51cda11-91ee-4d48-b33a-934cf848c2d1" method="POST" autoComplete='off' className=' border-2 border-green-700
         flex flex-col justify-center items-center flex-wrap md:p-10  mt-10 text-slate-200 mix-blend-screen' >

            <div className='flex flex-wrap justify-center items-center '>

                <div className='grid gap-4 max-sm:mt-4'>
                    <Input type="text" name="name" placeholder='Your Name' />
                    <Input type="phone" name="phone" placeholder='Your Phone' />
                    <Input type="email" name="email" placeholder='Your Email' />
                </div>
                <div className='flex flex-wrap pl-4'>
                    <Input1 type="text" name="message" placeholder='Your Message' />
                </div>
            </div>

            <div className='flex justify-center'>
                <button type="submit" className=' mt-10 w-40 rounded text-zinc-900 font-semibold bg-green-700 p-2  text-lg transition ease-in duration-300 delay-200
             hover:text-green-700 hover:bg-transparent hover:border-2 hover:border-green-700 mb-6  '>Send</button>
            </div>
        </form>

    )
}

export default Form
