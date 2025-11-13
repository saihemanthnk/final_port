"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import Link from 'next/link'


const HeroSection = () => {
  
  return (
    <section className='lg:py-8'>
        <motion.div  initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className='grid grid-cols-1 lg:grid-cols-12'>
            <div  className='col-span-8 place-self-center text-center sm:text-left'>
            <h2 className="text-white mb-3  font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-stone-400">Hello, I&apos;m </span>
                <br></br>
                <TypeAnimation
      sequence={[
        
        'Hemanth',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Full Stack Developer',
        1000,
        'Mobile Developer',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                </h2>
            <p className='text-[#ADB7B6] text-lg lg:text-xl mb-2'>I focus on buiding complex and quality applications and services.<br></br>I&apos;m an under graduated student from  Indian Institute of Information Technology Kottayam, and I had pursued bachelor&apos;s degree in Electronics and Communication Engineering.</p>
            <p className='text-[#ADB7B6] text-lg lg:text-xl mb-2'>I thrive on tackling real-world challenges through innovative solutions. With a keen analytical mindset, I enjoy dissecting complex problems and developing strategies that make a tangible impact.</p>
            <p className='text-[#ADB7B6] text-lg lg:text-xl mb-6'>Right now, I&apos;m Working on some exciting projects that I can&apos;t wait to share with you. But I&apos;m always open to new opportunities and collabarations.</p>
            <div>
                <button className='text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full sm:w-fit hover:bg-slate-200 rounded-full px-4 py-2 mr-4 mb-2 sm:mb-0'>Hire Me</button>
                <button className='text-white bg-transparent border w-full sm:w-fit border-white hover:bg-slate-800 rounded-full px-4 py-2'> <Link href='https://drive.google.com/file/d/1HXltrR8F1Fk8TwAkZaV5AF4oPhV_rZaB/view?usp=sharing'>Download CV</Link></button>
                
            </div>
            </div>

            <div className='col-span-4 mt-6 lg:mt-0 '>

                <div className='width-[250px] h-[350px] lg:width[400px] lg:height[400px] relative'>
                <Image src='/images/dev-1.png' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='Hero Img' width={300} height={300}/>
                </div>
            </div>
        </motion.div>

        
    </section>
  )
}

export default HeroSection
