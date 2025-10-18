export default function AddButton({ onClick }) {
    return (
        <button onClick={onClick} style={{
            margin: '10px',
            padding: '10px',
            backgroundColor: 'olive',
            border: 'none',
            borderRadius: '5px',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
            userSelect: 'none',
        }}>
            +
        </button>
    )

}