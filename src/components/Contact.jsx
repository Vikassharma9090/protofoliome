import React from 'react'

const Contact = () => {
  return (
    <>
   <div name='contact' className='w-full px-12 h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
    <form action='https://getform.io/f/3bb9f442-7e5b-40d9-bbe4-8b552abe9846' method='POST' className=' flex flex-col max-w-[600px] w-full ' >
      <div className='pb-8 py-8 text-center'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-4'> Submit the form below or shoot me an email- Vikaskumarasharma06470@gmail.com</p>
      </div>
      <input className='bg-[#ccd6f6] p-2'  type="text" placeholder='name' name='name'/>
      <input className='my-4 p-2 bg-[#ccd6f6]'  type="text" placeholder='Email' name='email' />
      <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message here' cols="10" rows="10"></textarea>
      <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Coilborate</button>

    </form>


    </div>
    </>
  )
}

export default Contact