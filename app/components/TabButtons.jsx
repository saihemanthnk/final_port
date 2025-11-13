import React from 'react'

// const variants = {
//   default: {width:0},
//   active: {width:"calc(100%-0.75rem)"}
// }


const TabButton = ({active,selectTab,children,tab}) => {
    const buttonClasses = active?'text-white border-b border-purple-500':'text-[#ADB7B6]'
   console.log(tab)
  return (
    <>
       <button onClick={selectTab}>
        <p className={`font-semibold ${buttonClasses}`}>{tab}</p>
       </button>
       {children}
       
    </>
  )
}

export default TabButton
