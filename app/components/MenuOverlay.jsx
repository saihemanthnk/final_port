import React from 'react'
import NavLinks from './NavLinks'

function MenuOverlay({links}) {
  return (
    <div>
      <ul className='flex items-center py-4 flex-col '>
        {links.map((item,index)=> {return (<li key={index}><NavLinks ref1={item.ref1} title={item.title}></NavLinks></li>)} )}

      </ul>
    </div>
  )
}

export default MenuOverlay
