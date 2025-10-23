export default function NoteItem({ id, title, note, onEdit }) {
    return (
        <div className="bg-surface min-h-30 rounded-xl relative p-5 pb-0 m-5 shadow-md/10 w-70 sm:w-100 md:w-180 flex flex-col">
            {/*Title*/}
            <div className='text-text h-10 font-bold'>
                {title}
            </div>
            {/*Body*/}
            <div className='text-gray-800 leading-relaxed break-words'>
                {note}
            </div>
            {/*Edit button*/}
            <button
                onClick={() => onEdit(id)}
                className="bg-primary hover:bg-primary-hover text-white rounded px-3 py-1 text-sm cursor-pointer justify-self-end self-end my-5 w-15 h-8"
            >
                Edit
            </button>
        </div>
    )
}