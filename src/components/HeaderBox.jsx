import React from 'react'

const HeaderBox = ({type,title , user , subtext}) => {
  return (
    <header className=" text-slate-100 p-4 shadow-md w-full">
    {/* Full width container */}
    <div className="w-full flex flex-col sm:flex-row items-center justify-between">
      {/* Left Section - Title and Subtext */}
      <div className="flex flex-col text-center sm:text-left">
        <h1 className="text-3xl text-slate-800 font-bold">{title} {type==="greeting" && (<span>{user}</span>)}</h1>
        <p className="text-xl text-slate-600">{subtext}</p>
      </div>
    </div>
  </header>

        
   
   
  )
}

export default HeaderBox