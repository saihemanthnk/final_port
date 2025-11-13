import React from 'react'

const ProjectTag = ({title,onClick,isSelected}) => {

    const ButtonStyles = isSelected?'text-white border-purple-500':'text-[#BDB7BE] border-slate-400 hover:border-white'
  return (
    <div>

     <button onClick={onClick} className={`rounded-full border-2 px-6 py-3 text-md cursor-pointer ${ButtonStyles}`}>{title}</button>
      
    </div>
  )
}

export default ProjectTag
