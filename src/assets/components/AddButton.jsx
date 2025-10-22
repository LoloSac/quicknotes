export default function AddButton({ onClick }) {
    return (
        <button 
            onClick={onClick} 
            className="
                fixed bottom-8 right-8
                bg-primary hover:bg-primary-hover hover:cursor-pointer
                text-white text-3xl
                rounded-xl w-12 h-12
                flex items-center justify-center
                shadow-md/30
            "
        >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
        </button>
    )
}