



/**
 * This is a modal component
 * 
 * !you can not add class are already exists in default
 * 
 * className: bg-white p-4 rounded shadow-lg min-w-96 py-5
 */





const StyledModal = ({ children, isOpen, onClose, className }) => {

    return isOpen && (
        <div onClick={onClose} className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white p-4 rounded shadow-lg min-w-96 py-5 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default StyledModal