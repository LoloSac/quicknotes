export default function NoteItem({ id, title, note, onDelete, onEdit }) {
    return (
        <div style={{
            border: '2px solid olive',
            borderRadius: '8px',
            margin: '10px',
            padding: '15px',
            backgroundColor: '#fafafa',
            boxShadow: '0 2px 4px rgba(128, 128, 0, 0.1)',
            position: 'relative',
            width: '500px',
            minHeight: '150px'
        }}>
            <button
                onClick={() => onEdit(id)}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '90px',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    fontSize: '0.9em'
                }}
            >
                Edit
            </button>
            <button
                onClick={() => onDelete(id)}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#ff4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    fontSize: '0.9em'
                }}
            >
                Delete
            </button>
            <div className='titulo' style={{
                display: 'block',
                fontWeight: 'bold',
                fontSize: '1.2em',
                color: 'olive',
                marginBottom: '8px',
                paddingRight: '80px'
            }}>{title}</div>
            <div style={{
                display: 'block',
                color: '#333',
                lineHeight: '1.4'
            }}>{note}</div>
        </div>
    )
}