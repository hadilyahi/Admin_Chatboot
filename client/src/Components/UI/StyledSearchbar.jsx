
/**
 * This is a styled search bar
 * for now it's just an input, in future it will be a reusable search bar
 * 
 * !Don't add class are already exists in default
 */

import { IoSearch } from "react-icons/io5"
import Inputs from "../generics/Inputs"

const StyledSearchbar = ({ className }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <IoSearch />

            <input type="search" placeholder="Search" className="outline-none bg-transparent" />
        </div>
    )
}

export default StyledSearchbar