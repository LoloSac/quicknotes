import GenericButton from './GenericButton.jsx'
export default function EmptyState({isDark, onClick}) {
    return(
        <div className="flex flex-col items-center">
            <img src={`/quicknotes/img/${isDark ? 'empty' : 'notes'}.png`} alt="empty ghost img"  className="w-70 mb-5"/>
            <p className="
                text-text font-bold text-lg dark:text-dark-text
                mb-2
            ">
                You have no notes!
            </p>
            <p className="mb-8 mx-10 max-w-100 text-center">When you are ready, press the button below to create your first note.</p>
            <GenericButton 
                onClick={onClick} 
                content='Create your first note'
                className="
                    bg-primary hover:bg-primary-hover 
                    cursor-pointer
                    text-white text-base
                    rounded-xl w-50 h-12
                    shadow-md/30
                ">
                <span>Create your first note</span>
            </GenericButton>
        </div>
    )
}