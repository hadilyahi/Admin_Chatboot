
/**
 * this is a styled button
 * 
 * ! you can not add class are already exists in default
 * 
 * className: flex items-center shadow
 */

const StyledBtn = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`flex items-center shadow ${className}`}>
            {children}
        </button>
    )
}

export default StyledBtn