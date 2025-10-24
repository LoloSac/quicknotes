import { useEffect, useState } from 'react'
import NoteContainer from './assets/components/NoteContainer.jsx'
import AddButton from './assets/components/AddButton.jsx'
import NoteEditScreen from './assets/components/NoteEditScreen.jsx'
import EmptySign from './assets/components/EmptySign.jsx'
import DarkModeButton from './assets/components/DarkModeButton.jsx'

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
  
  const[isDark, setIsDark] = useState(false);
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
  const changeTheme = () =>{
    setIsDark(!isDark);
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
    <div className={(isDark)?"dark":null}>
      
      <div className={`flex flex-col w-screen min-h-screen ${isEmpty ? 'justify-center':null} bg-bg dark:bg-dark-bg text-text dark:text-dark-text`}>
        {/*Note container / Empty Sign*/}
        {!isEmpty ? <NoteContainer notes={notes} onEdit={editNote}></NoteContainer>:<EmptySign></EmptySign>}
        {/*Add Button*/}
        <AddButton onClick={() => { setShowNew(true) }}></AddButton>
        <DarkModeButton onClick={changeTheme} isDark={isDark}></DarkModeButton>
        {showNew && <NoteEditScreen onAddNote={addNote} isEditing={isEditing} editingID={editingID} onCloseEdit={onCloseEdit} onDelete={deleteNote} onEdit={onEdit} getNoteByID={getNoteByID}></NoteEditScreen>}
      </div>


    </div>
  )
}

export default App;
