export default function DeleteButton({ id, onDelete }) {
    return(
            <button 
                onClick={() => onDelete(id)}
                className="bg-accent hover:bg-red-600 text-white rounded px-3 py-1 text-sm cursor-pointer"
            >
                Delete
            </button>
    )
}