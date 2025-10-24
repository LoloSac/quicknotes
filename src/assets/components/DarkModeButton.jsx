import moonIcon from '../icons/moon.svg';
import sunIcon from '../icons/sun.svg'
export default function DarkModeButton({ onClick, isDark }) {
    return (
        <button 
            onClick={onClick} 
            className="
                fixed bottom-8 left-8
                bg-primary hover:bg-primary-hover hover:cursor-pointer
                text-white text-3xl
                rounded-xl w-12 h-12
                flex items-center justify-center
                shadow-md/30
            "
        >
            <img src={isDark ? sunIcon : moonIcon} className="w-8 h-8 color-white brightness-0 invert" />
        </button>
    )
}