import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({ name: "", phone: "", email: "", message: "" })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Message Sent")
    }


    function Input({ type, placeholder, name,typ}) {
        return <input type={type} name={name} placeholder={placeholder}  className='bg-transparent rounded border-2 mb-2 border-red-600 pt-4 p-2 pr-40 outline-none ' />
        
    }
    
    function Input1({ type, placeholder, name,typ}) {
        return <input type={type} name={name} placeholder={placeholder}  className='bg-transparent rounded border-2 mb-2 border-red-600 pt-4 p-2 pr-40 outline-none pb-40 max-sm:mr-4' />
        
    }

    return (

        <form onSubmit={handleSubmit} autoComplete='off' className=' border-2 md:border-green-700 max-sm:border-none  flex flex-col flex-wrap md:p-10  mt-10 text-slate-200 mix-blend-screen' >
            <div className='flex  flex-wrap justify-center'>
                <div className='grid '>
                    <Input type="text" name="name"  onChange={handleChange} value={data.name} placeholder='Your Name' />
                    <Input type="phone" name="phone" onChange={handleChange} value={data.phone} placeholder='Your Phone' />
                    <Input type="email" name="email" onChange={handleChange} value={data.email} placeholder='Your Email' />
                </div>
                <div className='flex flex-wrap pl-4'>
                    <Input1 type="text" name="message" onChange={handleChange} value={data.message} placeholder='Your Message'/>
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
