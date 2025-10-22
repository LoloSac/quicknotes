import NoteItem from "./NoteItem";

export default function NoteContainer({ notes, onDelete, onEdit }) {
    return (
        <div className="flex flex-col w-full h-full items-center p-8">
            {(notes!== null)?notes.map((note) => (<NoteItem key={note.id} id={note.id} title={note.title} note={note.content} onDelete={onDelete} onEdit={onEdit} ></NoteItem>)):null}
        </div>
    )
}
