import { IoIosArrowForward } from "react-icons/io";


const Card = ({title , time}) => {
  return (
    <div className='rounded-2xl p-5 bg-sky-300/90 hover:-translate-y-2 duration-300 hover:shadow-lg cursor-pointer'>
        <div className='flex items-center justify-between h-full'>
            <h1>{title}</h1>
            <IoIosArrowForward  className="text-white hover:text-blue"/>
        </div>
        <p className="text-neutral-100 text-xs">{time} Hours</p>
    </div>
  )
}

export default Card;