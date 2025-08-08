import React from 'react'
import { GrInProgress } from "react-icons/gr";

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bg-green-500 h-12 z-50 px-2.5 pt-1 text-white'>
        <div className='flex items-center space-x-1'>
      <h1 className='text-2xl font-bold italic'>Damine</h1>
      <GrInProgress className='text-3xl animate-spin'/>
        </div>
    </div>
  )
}

export default Header
