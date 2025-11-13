import React from 'react'
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'




const ProjectCard = ({imgUrl,title,description,gitUrl,previewUrl}) => {
  return (
    <div>

    <div className='h-52 md:h-62 rounded-t-lg relative group' style={{backgroundImage:`url(${imgUrl})`,backgroundSize:'cover'}}>
        <div className='overlay absolute   top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500'>
            <Link href={gitUrl} className='w-24 h-24 relative    border-[#ADB7BE] rounded-full hover:border-white group/link'>
            <CodeBracketIcon className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer text-[#ADB7BE] group:over/link:text-white'></CodeBracketIcon>
            </Link>

            <Link href={previewUrl} className='w-24 h-24 relative    border-[#ADB7BE] rounded-full hover:border-white'>
            <EyeIcon className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer text-[#ADB7BE] hover:text-white '></EyeIcon>
            </Link>
        </div>
    </div>
    <div className='text-white rounded-b-lg py-6 px-4'>
        <h5 className='text-xl font-semi-bold mb-2'>{title}</h5>
        <p className='text-[#ADB7B6]'>{description}</p>
    </div>

      
    </div>
  )
}

export default ProjectCard
