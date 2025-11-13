'use client'

import React from 'react'
import dynamic
 from 'next/dynamic'

 const AnimatedNumbers = dynamic(()=>{return import('react-animated-numbers')},{ssr:false})


const acheivementList = [
    {
        metric:"Projects",
        value:"5",
        postfix:'+'
    },
    {
        prefix:'~',
        metric:"Users",
        value:"3"
    },
    {
        metric:"Awards",
        value:"2+"
    },
    {
        metric:"Years",
        value:"1+"
    },
]

const AcheivementsSection = () => {
  return (
    <div className='py-4 px-4 xl:gap-16 xl:px-16 sm:py-16'>
        <div className='border-[#33353F] border rounded px-16 py-8 flex flex-row justify-between items-center'>
        {acheivementList.map((item,index)=>{
            return (
                <div key={index} className='d-flex flex-col items-center justify-center mx-4'>
                    <h2 className='text-white font-bold text-4xl flex flex-row'>
                        {item.prefix}
                        <AnimatedNumbers includeComma animateToNumber={parseInt(item.value)}
                        locale='en-US' className='text-white font-bold text-4xl' config={((_,index)=>{
                            return{
                                mass:1,
                                friction:100,
                                tensions: 140 * (index+1)
                            }
                        })}/>

                        {item.postfix}

                       
                    </h2>
                    <p className='text-[#ADB7BE] font-base'>{item.metric}</p>
                    </div>
            )
        })}
        </div>
      
    </div>
  )
}

export default AcheivementsSection
