import { useState } from 'react'
import NoteItem from './assets/components/NoteItem.jsx'
import NoteContainer from './assets/components/NoteContainer.jsx'
import AddButton from './assets/components/AddButton.jsx'
import EditScreen from './assets/components/EditScreen.jsx'
// borrar despues
import NewNote from './assets/components/NoteEditScreen.jsx'
import NoteEditScreen from './assets/components/NoteEditScreen.jsx'

function App() {
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title: title,
      content: content
    }
    setNotes([...notes, newNote]);
    setShowNew(false);
  }

  const deleteNote = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  const editNote = (id) => {
    setEditingID(id);
    setIsEditing(true);
    setShowNew(true);
  }
  const onCloseEdit = () => {
    setShowNew(false);
    setIsEditing(false);
    setEditingID(null);
  }

  const [showNew, setShowNew] = useState(false)

  const [notes, setNotes] = useState([
    { id: 1, title: 'Sample Note', content: 'This is a sample note.' },
    { id: 2, title: 'Sample 2', content: 'Xd' }
  ])
  const [isEditing, setIsEditing] = useState(false);

  const [editingID, setEditingID] = useState(null);

  return (
    <>
      <NoteContainer notes={notes} onDelete={deleteNote} onEdit={editNote}></NoteContainer>
      <AddButton onClick={() => { setShowNew(true) }}></AddButton>
      {showNew && <NoteEditScreen onAddNote={addNote} isEditing={isEditing} editingID={editingID} onCloseEdit={onCloseEdit}></NoteEditScreen>}


    </>
  )
}

export default App;
