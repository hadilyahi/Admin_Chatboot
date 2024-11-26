import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Inputs = ({type , placeholder , position}) => {
  return (
    <div className={`relative w-[50%] h-14 ${position}`}>
        <input type={type} className='w-full bg-white p-2 h-full rounded-xl outline-none hover:outline-yellow focus:outline-yellow placeholder:text-gray-400 ' placeholder={placeholder} />
       <FaSearch  className='absolute right-2 top-2'/>
    </div>
  )
}

export default Inputs