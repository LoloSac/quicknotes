import { useState } from "react";
export default function NoteEditScreen({ onAddNote, isEditing, editingID, onCloseEdit }) {
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                width: '80%',
                maxWidth: '600px',
                maxHeight: '80%',
                overflow: 'auto',
                color: 'black',
                position: 'relative'
            }}>
                {/* Close button */}
                <button
                    style={{
                        position: 'absolute',
                        top: '0px',
                        right: '5px',
                        paddingTop: '0px',
                        marginTop: '0px',
                        background: 'none',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer',
                        color: '#666',
                        padding: 0
                    }}
                    onClick={onCloseEdit}
                >
                    ×
                </button>
                {/*Title and text inputs*/}
                <input placeholder="Title"
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    style={{
                        width: '100%',
                        boxSizing: 'border-box'
                    }} />
                <textarea placeholder="Your note here..."
                    onChange={(e) => setNewContent(e.target.value)}
                    value={newContent}
                    style={{
                        width: '100%',
                        height: '200px',
                        marginTop: '10px',
                        boxSizing: 'border-box'
                    }}></textarea>
                <button type="submit" onClick={() => { onAddNote(newContent, newTitle) }}>Submit</button>

            </div>
        </div>
    )
}