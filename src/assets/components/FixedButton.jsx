export default function FixedButton({ onClick, content, className}) {
    return (
        <button 
            onClick={onClick} 
            className={`
                fixed
                bg-primary sm:hover:bg-primary-hover hover:cursor-pointer
                text-white
                rounded-xl w-12 h-12
                flex items-center justify-center
                shadow-md/30
                select-none
                transition-colors
                duration-100
                ${className}
            `}
        >
            {content}

        </button>
    )
}