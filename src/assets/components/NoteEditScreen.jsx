import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
export default function NoteEditScreen({ onAddNote, isEditing, onEdit, editingID, onCloseEdit, getNoteByID, onDelete}) {
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    useEffect(() => {
        if (isEditing) {
            const note = getNoteByID(editingID);
            if(note){
                setNewTitle(note.title);
                setNewContent(note.content);
            }
        }
    }, [editingID, isEditing, getNoteByID]);

    return (
        <div className= "fixed w-full h-full bg-black/50 flex flex-col justify-center items-center top-0 b-0" onMouseDown={onCloseEdit}>
            {/*mainWindow*/}
            <div className="w-xl bg-surface p-8 flex flex-col gap-6 pb-6 relative rounded justify-evenly *:focus:outline-none *:focus:ring-2 *:focus:ring-primary/50" onMouseDown={(e) => e.stopPropagation()}>
                {/*Title and text inputs*/}
                <input placeholder="Title" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className = "rounded shadow-inner shadow-black/10 bg-surface-shadow p-2 text-text font-bold placeholder:text-zinc-400"/>
                <textarea placeholder="Your note here..." onChange={(e) => setNewContent(e.target.value)} value={newContent} className= "h-50 rounded shadow-inner shadow-black/10 bg-surface-shadow p-2 font-medium placeholder:text-zinc-400"></textarea>
                {/*BUTTONS*/}
                <div className="*:rounded *:h-10 *:w-20 *:text-base *:font-medium flex flex-row gap-2 justify-end">
                    {/* Delete button */}
                    {isEditing && <DeleteButton onDelete={(id) => { onDelete(id); onCloseEdit(); }} id={editingID} className="mr-auto">Delete</DeleteButton>}
                    {/* Close button */}
                    <button onClick={onCloseEdit} className="bg-neutral-300 text-black">Cancel</button>
                    {/*Submit button*/}
                    <button onClick={() => { (isEditing) ? onEdit(editingID, newTitle, newContent) : onAddNote(newTitle, newContent)}} className="bg-primary text-surface">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}