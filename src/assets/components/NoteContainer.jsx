import NoteItem from "./NoteItem";

export default function NoteContainer({ notes, onDelete }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {notes.map((note) => (<NoteItem key={note.id} id={note.id} title={note.title} note={note.content} onDelete={onDelete} ></NoteItem>))}
        </div>
    )
}
