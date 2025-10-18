import { useState } from 'react'
import NoteItem from './assets/components/NoteItem.jsx'
import NoteContainer from './assets/components/NoteContainer.jsx'
import AddButton from './assets/components/AddButton.jsx'
// borrar despues
import NewNote from './assets/components/NewNote.jsx'

function App() {
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title: title,
      content: content
    }
    setNotes([...notes, newNote])
    setShowNew(false)
  }
  const [showNew, setShowNew] = useState(false)
  const [notes, setNotes] = useState([
    { id: 1, title: 'Sample Note', content: 'This is a sample note.' },
    { id: 2, title: 'Sample 2', content: 'Xd' }
  ])

  return (
    <>
      <NoteContainer notes={notes}></NoteContainer>
      <AddButton onClick={() => { setShowNew(true) }}></AddButton>
      {showNew && <NewNote setShowNew={setShowNew} onAddNote={addNote}></NewNote>}


    </>
  )
}

export default App
