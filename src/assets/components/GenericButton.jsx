export default function GenericButton({ onClick, content, className, type = "button"}) {
    return (
        <button 
                type={type}
                onClick={onClick}
                className={`
                    transition-colors
                    duration-100
                    rounded
                    px-3 py-1 
                    cursor-pointer 
                    ${className}
                `}
            >
                {content}
            </button>
    )
}