import React from 'react'
import Link from "next/link"

function NavLinks({ref1,title}) {
  return (
   
    <Link href={ref1} className='block text-[#ADB7B6] py-2 pl-3 pr-2 sm:text-xl rounded md:p-0 hover:text-white'>{title}</Link>
  )
}

export default NavLinks
