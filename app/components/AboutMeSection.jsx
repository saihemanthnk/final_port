'use client'
import React from 'react'
import Image from 'next/image'
import {useState,useTransition} from 'react'
import TabButton from './TabButtons'

const TabData = [
    { 
        name:'Languages',
        id:'Languages',
        content:(
            <ul className='list-disc pl-3'>
                <li>Java Script</li>
                <li>Type Script</li>
                <li>Python</li>
                <li>C</li>
                <li>C++</li>
                <li>HTML</li>
                

            </ul>
        )

    },
    { 
        name:'Frame Works',
        id:'Frame Works',
        content:(
            <ul className='list-disc pl-3'>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Redux Tool Kit</li>
                <li>REST API</li>
                <li>Tailwind CSS</li>
                <li>Angular</li>
                <li>Shadcn/ui</li>
                <li>Bootstrap</li>
               
                
            </ul>
        )

    },
    { 
        name:'DataBases',
        id:'DataBases',
        content:(
            <ul className='list-disc pl-3'>
                <li>MongoDB</li>
                <li>PostgresSQL</li>
                <li>SQL</li>
               
                
            </ul>
        )

    },
    { 
        name:'Tools',
        id:'Tools',
        content:(
            <ul className='list-disc pl-3'>
                <li>GIT</li>
                <li>Git Bash</li>
                <li>PostMan</li>
                <li>VSCode</li>
               
                
            </ul>
        )

    },
    { 
        name:'Education',
        id:'Education',
        content:(
            <ul className='list-disc pl-3'>
                <li>IIIT KOTTAYAM</li>
                <li>Narayana college</li>
                <li>Ravindhra Bharathi School</li>
                
                

            </ul>
        )

    },
]

function AboutMeSection() {
    const [tab,setTab] = useState('Languages')
    const [_trans,startTransition] = useTransition()

    const handleTabChange = (id)=>{
        startTransition(()=>setTab(id))
    }
  return (
    <section id="about" className='text-white scroll-mt-24'>
        <p>{_trans}</p>
        <div className='grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
          <Image src='/images/about-image.png' alt='about image' width={500} height={600} />
          <div className='text-left mt-4 md:mt-0 flex flex-col h-full'>
            <h2 className='text-white font-bold text-4xl mb-3'>About Me</h2>
            <p className='text-base lg:text-lg'>  I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, Angular, MongoDb, AWS and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.</p>
            <div className='flex flex-row space-x-3 mt-4'>

                {TabData.map((item,index)=><TabButton key={index} selectTab={()=>handleTabChange(item.name)} active={tab===item.name} tab={item.name}></TabButton>)}
                
            </div>
            <div className='mt-3'>
                {TabData.find((item)=>item.id === tab)?.content}
            </div>
          </div>

        </div>
      
    </section>
  )
}

export default AboutMeSection
