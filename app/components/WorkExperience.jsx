import React from 'react'
import WorkExperienceCard from './WorkExperienceCard'

const workData = [
    {
      id: 1,
      company:"Leading Torch",
      role:'SDE Inten',
      description: "Contributed to a team effort to repliacate the functionality of RAMS. Implemented the frontend logic and integrated with backend services for seamless user experience using Angular Nodejs AWS and PostgresSQL.",
      image: "",
      
    },
      {
      id: 2,
      company:"Infosys",
      role:'Specialist Programmer',
      description: "Contributed to the development of Infosys Topaz Fabric and Agentic Platforms, focusing on building scalable, intelligent solutions. Collaborated with cross-functional teams to design and implement advanced features, leveraging modern technologies to enhance platform capabilities and deliver business value.",
      image: "",
      
    }
]

const WorkExperience = () => {
  return (
    <div>

    <h2 className='text-white text-center font-bold mt-2 text-4xl mb-6'>Work Experience</h2>
    
    <div className='grid md:grid-cols-1 gap-8 md:gap-12'>
        {workData.map((item)=><WorkExperienceCard key={item.id} imgUrl={item.image} title={item.company} description={item.description}  role={item.role} ></WorkExperienceCard>)}
    </div>
  
</div>
  )
}

export default WorkExperience
