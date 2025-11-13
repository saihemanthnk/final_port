import React from 'react'
import { EyeIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'


const WorkExperienceCard = ({imgUrl,title,description,role}) => {
  return (

    <div className='mb-3'>


<div className='h-60 md:h-70 rounded-t-lg relative group' style={{backgroundImage:`url(${imgUrl})`,backgroundSize:'cover'}}>
    <div className='overlay absolute   top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500'>
        
        <Link href='/' className='w-100 h-50 relative    border-[#ADB7BE] rounded-full hover:border-white'>
        <EyeIcon className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer text-[#ADB7BE] hover:text-white'></EyeIcon>
        </Link>
    </div>
</div>
<div className='text-white rounded-b-lg py-6 px-4'>
    <h5 className='text-xl font-semi-bold mb-2'>{title}</h5>
    <span className='text-[#ADB7BE] mb-3 hover:text-white'>{role}</span>
    <p className='text-[#ADB7B6] mt-1'>{description}</p>
</div>

</div>

  )
}

export default WorkExperienceCard
