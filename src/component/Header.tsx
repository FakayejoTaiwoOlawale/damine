import React from 'react'
import { GrInProgress } from "react-icons/gr";

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
        <div>
      <h1>Damine</h1>
      <GrInProgress/>
        </div>
    </div>
  )
}

export default Header
