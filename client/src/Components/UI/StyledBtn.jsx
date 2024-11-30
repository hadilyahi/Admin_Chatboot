/**
 * this is a styled button
 *
 * ! you can not add class are already exists in default
 *
 * className: flex items-center shadow
 */

import Link from "next/link";

const StyledBtn = ({ children, className, onclick, path , type , isDisabled }) => {
  return path ? (
    <Link href={path} onClick={onclick} className={`flex items-center ${className}`}>
      {children}
    </Link>
  ) : (
    <button type={type} disabled={isDisabled} onClick={onclick} className={`flex items-center ${className}`}>
      {children}
    </button>
  );
};  

export default StyledBtn;
