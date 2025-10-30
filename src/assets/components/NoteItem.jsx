import GenericButton from "./GenericButton";

export default function NoteItem({ id, title, note, onEdit }) {
    return (
        <div className="bg-surface dark:bg-dark-surface min-h-30 rounded-xl relative p-5 pb-0 m-5 shadow-md/10 w-70 sm:w-100 md:w-180 flex flex-col">
            {/*Title*/}
            <div className='text-text dark:text-dark-text h-10 font-bold'>
                {title}
            </div>
            {/*Body*/}
            <div className='text-gray-800 dark:text-gray-200 leading-relaxed wrap-break-word'>
                {note}
            </div>
            {/*Edit button*/}
            <GenericButton
                onClick={() => onEdit(id)}
                className="bg-primary text-white self-end my-5 w-15 h-8 text-sm"
                content="Edit"
            ></GenericButton>
        </div>
    )
}