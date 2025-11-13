"use client"
import React from 'react'
import ProjectCard from './ProjectCard'
import { useState,useRef } from 'react';
import ProjectTag from './ProjectTag'
import {motion,useInView} from "framer-motion"


const projectsData = [
    {
      id: 1,
      title: "Berry Watcher Empowering Precision Agriculture",
      description: "Developed an instance segmentation model that accurately detects and segments seven strawberry diseases. Through data augmentation, our model ensures robust performance under diverse conditions. Incorporated into the user-friendly Berry Watcher website, this solution enables real-time disease monitoring, early intervention, and improved crop yield and quality.",
      image: "/projects/BerryWatcher.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "E-commerce Application",
      description: "Designed and built a responsive e-commerce web application using React and Django, facilitating user-friendly navigation, secure transactions. Engineered a full-fledged e-commerce website using React and Django, showcasing an array of products with diverse variations.",
      image: "/projects/3.png",
      tag: ["All",'Web'],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Place Picker for Your World Tour",
      description: "Developed an interactive web application using React for creating personalized world tour itineraries. Integrated geolocation features to dynamically suggest available places based on the user’s geographic location.",
      image: "/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Weather Application",
      description: "Developed a Weather Forecast App using Django, React and Rest API, fetching data from openweathermap.org to display accurate weather information based on user-entered coordinates and detailing preferences. Implemented local database storage for time-sensitive data and integrated Google Maps for location input.",
      image: "/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Tic-Tac-Toe game",
      description: "Developed a two-player Tic Tac Toe game using React, providing an interactive gaming experience. Utilized React’s state management and component architecture to handle game logic and user interactions.",
      image: "/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
 
  ];

const cardVarients = {

  initial:{opacity:0,y:50},
  animate:{opacity:1,y:1}

}

const ProjectSection = () => {
    const [tag,selectTag] = useState('All')
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})

    const handleTagChange = (newtag)=>{
         
        selectTag(newtag)
    }

    const filteredProjects = projectsData.filter((project)=> project.tag.includes(tag))

  return (
    <section id='projects' className='scroll-mt-24'>

        <h2 className='text-white text-center font-bold mt-3 text-4xl mb-8'>My projects</h2>
        <div className='text-white flex flex-row gap-4 justify-center items-center py-4'> 
            <ProjectTag title="All" onClick={()=>handleTagChange('All')} isSelected={tag === 'All'}></ProjectTag>
            <ProjectTag title="Web" onClick={()=>handleTagChange('Web')} isSelected={tag === 'Web'}></ProjectTag>
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((item,index)=>
            <motion.li key={index} variants={cardVarients} initial='initial' animate={isInView?'animate':'initial'} transition={{duration:0.3,delay: index*0.5}}>
            <ProjectCard key={item.id} imgUrl={item.image} title={item.title} description={item.description} gitUrl={item.gitUrl || '/'} previewUrl={item.previewUrl || '/'} />
            </motion.li>)}
        </ul>
      
    </section>
  )
}

export default ProjectSection
