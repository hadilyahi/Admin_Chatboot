import React from 'react'
import { IoIosSearch } from "react-icons/io";


const Inputs = ({type , placeholder , position , className , search , isFocus , onchange , id , onclick , value}) => {
  return (
    <div className={`relative  ${position}`}>
        <input id={id} type={type} value={value} onChange={onchange} onFocus={isFocus} onClick={onclick} className={`w-full bg-white  rounded outline-none  placeholder:text-gray-400 ${className}`} placeholder={placeholder} />
       {
        search && <IoIosSearch  className='absolute right-2 top-2 hover:cursor-pointer hover:text-blue text-xl'/>
       }
    </div>
  )
}

export default Inputs;