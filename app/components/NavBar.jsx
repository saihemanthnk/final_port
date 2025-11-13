"use client"
import React from 'react'
import Link from "next/link"
import NavLinks from './NavLinks'
import {useState} from "react"
import { Bars3Icon,XMarkIcon } from '@heroicons/react/16/solid'
import MenuOverlay from './MenuOverlay'



const navLinks = [
    {
        ref1:'#about',
        title:"About"
    },
    {
        ref1:'#projects',
        title:"Projects"
    },
    {
        ref1:'#contact',
        title:"Contact"
    }
]

function NavBar() {
   const [navbarOpen,setNavbarOpen] = useState(true)

   const toggleNavBar = ()=>{
      setNavbarOpen(!navbarOpen)

   }

  return (
    <nav className="fixed border border-[#33353F] top-0 left-0 right-0 z-10  bg-opacity-900 pt-2">
        <div className='flex flex-container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3'>
            <Link href={'/'} className='text-2xl md:text-4xl text-white font-semibold'>Portfolio</Link>

            <div className='mobile-menu block md:hidden'>

{navbarOpen?<button onClick={toggleNavBar} className='text-slate-200 border rounded border-slate-200 flex items-center px-2 py-2 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5'></Bars3Icon></button>:<button onClick={toggleNavBar} className='text-slate-200 border rounded border-slate-200 flex items-center px-2 py-2 hover:text-white hover:border-white'><XMarkIcon className='h-5 w-5'></XMarkIcon></button>}
            </div>

            <div className='menu hidden md:block w-auto ' id='navbar'>
                <ul className='flex md:flex-row p-4 md:p-0 md:space-x-8'>
                   { navLinks.map((item,index)=>{return (<li key={index}><NavLinks ref1={item.ref1} title={item.title}></NavLinks></li>)})}
                </ul>

            </div>
        </div>
    

    {!navbarOpen&&<MenuOverlay links={navLinks}></MenuOverlay>}
      
    </nav>
  )
}

export default NavBar
