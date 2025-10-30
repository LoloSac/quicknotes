export default function GenericButton({ onClick, content, className, hover = true, type = "button"}) {
    return (
        <button 
                type={type}
                onClick={onClick}
                className={`
                    rounded
                    px-3 py-1 
                    cursor-pointer 
                    ${hover? 'md:hover:brightness-80':''}
                    ${className}
                `}
            >
                {content}
            </button>
    )
}