export default function NoteItem({ id, title, note, onDelete, onEdit }) {
    return (
        <div className="bg-surface min-h-30 rounded-xl relative p-5 m-8 shadow-md/10 w-70 sm:w-100 md:w-180">
            {/*Edit button*/}
            <button
                onClick={() => onEdit(id)}
                className="absolute top-2 right-20 bg-primary hover:bg-primary-hover text-white rounded px-3 py-1 text-sm cursor-pointer"
            >
                Edit
            </button>
            {/*Delete button*/}
            <button
                onClick={() => onDelete(id)}
                className="absolute top-2 right-2 bg-accent hover:bg-red-600 text-white rounded px-3 py-1 text-sm cursor-pointer"
            >
                Delete
            </button>
            <div className='text-text h-10 font-bold'>
                {title}
            </div>
            <div className='text-gray-800 leading-relaxed break-words'>
                {note}
            </div>
        </div>
    )
}