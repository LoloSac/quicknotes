import { useState } from 'react'
import NoteItem from './assets/components/NoteItem.jsx'
import NoteContainer from './assets/components/NoteContainer.jsx'
import AddButton from './assets/components/AddButton.jsx'
import EditScreen from './assets/components/EditScreen.jsx'
// borrar despues
import NewNote from './assets/components/NewNote.jsx'

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
  const [showNew, setShowNew] = useState(false)
  const [notes, setNotes] = useState([
    { id: 1, title: 'Sample Note', content: 'This is a sample note.' },
    { id: 2, title: 'Sample 2', content: 'Xd' }
  ])
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <NoteContainer notes={notes} onDelete={deleteNote}></NoteContainer>
      <AddButton onClick={() => { setShowNew(true) }}></AddButton>
      {showNew && <NewNote setShowNew={setShowNew} onAddNote={addNote}></NewNote>}
      {isEditing && <EditScreen></EditScreen>}


    </>
  )
}

export default App;
