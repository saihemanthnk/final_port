"use client"
import React from 'react'
import LinkedinIcon from '../../public/images/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from '../../public/images/github-icon.svg'
// import axios from 'axios'


const EmailSection = () => {

  const handleSubmit = async(e)=>{
    e.preventdefault()
    const data = {
      email : e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.mesage.value
    }
    console.log(data)

    // const JsonData = JSON.stringify(data)
    // const endPoint = '/api/send'

    // const response = await axios.post(endPoint,JsonData)

    // console.log(response)
    
    
  }
  return (
    <section id='contact' className='grid grid-cols-2 my-6 md:my-8 py-12 gap-8 relative scroll-mt-10'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-purple-900  to-transparent h-80 w-80 rounded-full z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2 '></div>
      <div>
        <h5 className='font-bold text-xl text-white my-2'>Let&apos;s Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
           I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>

        <div className='social flex flex-row gap-4 z-10'>

           <Link href='https://www.linkedin.com/in/sai-hemanth-215819251'>
             <Image src={LinkedinIcon} alt="linkedin"/>
          </Link>

          <Link href='https://github.com/saihemanthnk'>
            <Image src={GithubIcon} alt="github"/>
         </Link>

         



         </div>
      </div>

     <div>

        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
           <div className='mb-3'>
            <label htmlFor='email' className='text-white font-medium mb-1  text-sm block'>Your Email?</label>
            <input className='bg-[#18191E] border border-[#33353F] py-2 px-3 rounded-md text-gray-100 text-sm placeholder-[#9CA2A9] block w-full ' type='email' id="email" name="email" required placeholder="test@gmail.com"></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='subject' className='text-white mb-1 font-medium  text-sm block'>Subject</label>
            <input className='bg-[#18191E] border border-[#33353F] py-2 px-3 rounded-md text-gray-100 text-sm placeholder-[#9CA2A9] block w-full ' type='text' id="subject" name="subject" required placeholder="Just say hi!"></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='message' className='text-white mb-1 font-medium  text-sm block'>Subject</label>
            <textarea className='bg-[#18191E] border border-[#33353F] py-2 px-3 rounded-md text-gray-100 text-sm placeholder-[#9CA2A9] block w-full ' name='message' id="message"  required placeholder="Lets talk about..."/>
          </div>

          <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-full w-full'>Send Message</button>
        </form>
     </div>





    </section>
  )
}

export default EmailSection
