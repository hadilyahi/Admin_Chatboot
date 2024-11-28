import React from 'react'
import { IoIosSearch } from "react-icons/io";


const Inputs = ({type , placeholder , position}) => {
  return (
    <div className={`relative w-[50%] h-10 ${position}`}>
        <input type={type} className='w-full bg-white p-2 h-full rounded-xl outline-none hover:outline-yellow focus:outline-yellow placeholder:text-gray-400 ' placeholder={placeholder} />
       <IoIosSearch  className='absolute right-2 top-2 hover:cursor-pointer hover:text-blue text-xl'/>
    </div>
  )
}

export default Inputs