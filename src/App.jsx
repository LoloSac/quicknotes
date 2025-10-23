import { useEffect, useState } from 'react'
import NoteContainer from './assets/components/NoteContainer.jsx'
import AddButton from './assets/components/AddButton.jsx'
import NoteEditScreen from './assets/components/NoteEditScreen.jsx'
import EmptySign from './assets/components/EmptySign.jsx'

function App() {
  // VARIABLES
  const [showNew, setShowNew] = useState(false)
  
  const [notes, setNotes] = useState(() => {
    let savedNotes = null;
    if (localStorage.getItem('notes')) {
      savedNotes = JSON.parse(localStorage.getItem('notes'));
    }
    if (savedNotes != null && savedNotes.length > 0) {
      return savedNotes;
    }
    return [
      { id: 1, title: 'Sample Note', content: 'This is a sample note.' }
    ]
  })
  
  
  
  const [isEditing, setIsEditing] = useState(false);
  
  const [editingID, setEditingID] = useState(null);

  const [isEmpty, setIsEmpty] = useState(false);
  // funciones

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title: title,
      content: content
    }
    setNotes([...notes, newNote]);
    setShowNew(false);
    setIsEmpty(false);
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

  const getNoteByID = (id) => {
    let note = notes.find((note) => note.id === id);
    return { title: note.title, content: note.content };
  }

  const onEdit = (id, newTitle, newContent) => {
    setNotes((notes) =>
      notes.map((note) =>
        // si el id es el mismo, copia la nota y cambiale esto
        note.id === id ? { id, title: newTitle, content: newContent } : note
      )
    );
    onCloseEdit();
  }
  const saveNotes = (notes) =>{
    // Guardar las notas en el almacenamiento local
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  // useEffects
  
  
  
  useEffect(() => {
    saveNotes(notes);
    if(notes.length === 0){
      setIsEmpty(true);
    }
  }, [notes]);
  
  return (
    <>
      
      <AddButton onClick={() => { setShowNew(true) }}></AddButton>
      <div className={`flex flex-col min-h-screen ${isEmpty ? 'justify-center':null}`}>
        {!isEmpty && <NoteContainer notes={notes} onEdit={editNote}></NoteContainer>}
        {isEmpty && <EmptySign></EmptySign>}

        {showNew && <NoteEditScreen onAddNote={addNote} isEditing={isEditing} editingID={editingID} onCloseEdit={onCloseEdit} onDelete={deleteNote} onEdit={onEdit} getNoteByID={getNoteByID}></NoteEditScreen>}
      </div>


    </>
  )
}

export default App;
