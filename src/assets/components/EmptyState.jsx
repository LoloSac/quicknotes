export default function EmptyState({isDark, onClick}) {
    return(
        <div className="flex flex-col items-center">
            <img src={`src/assets/icons/${isDark ? 'empty' : 'notes'}.png`} alt="empty ghost img"  className="w-70 mb-5"/>
            <p className="
                text-text font-bold text-lg dark:text-dark-text
                mb-2
            ">
                You have no notes!
            </p>
            <p className="mb-8 text-center">When you are ready, press the button below to create your first note.</p>
            <button onClick={onClick} className="
                bg-primary hover:bg-primary-hover hover:cursor-pointer
                text-white text-base
                rounded-xl w-50 h-12
                flex items-center justify-center
                shadow-md/30
            "> 
                <span>Create your first note</span>
            </button>
        </div>
    )
}