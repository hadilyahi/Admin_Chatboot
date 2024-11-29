/**
 * this is a styled button
 *
 * ! you can not add class are already exists in default
 *
 * className: flex items-center shadow
 */

import Link from "next/link";

const StyledBtn = ({ children, className, onclick, path }) => {
  return path ? (
    <Link href={path} onClick={onclick} className={`flex items-center ${className}`}>
      {children}
    </Link>
  ) : (
    <button onClick={onclick} className={`flex items-center ${className}`}>
      {children}
    </button>
  );
};  

export default StyledBtn;
