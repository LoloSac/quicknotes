export default function FixedButton({ onClick, content, className}) {
    return (
        <button 
            onClick={onClick} 
            className={`
                fixed
                bg-primary hover:bg-primary-hover hover:cursor-pointer
                text-white
                rounded-xl w-12 h-12
                flex items-center justify-center
                shadow-md/30
                ${className}
            `}
        >
            {content}

        </button>
    )
}