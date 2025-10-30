import { useEffect, useState } from 'react'
import NoteContainer from './assets/components/NoteContainer.jsx'
import FixedButton from './assets/components/FixedButton.jsx'
import NoteEditScreen from './assets/components/NoteEditScreen.jsx'
import EmptyState from './assets/components/EmptyState.jsx'

import plusSignIcon from './assets/icons/plus-sign.svg'
import sunIcon from './assets/icons/sun.svg'
import moonIcon from './assets/icons/moon.svg'

function App() {
  // VARIABLES
  const [showNew, setShowNew] = useState(false)
  
  const [notes, setNotes] = useState(() => {
    let savedNotes = null;
    if (localStorage.getItem('notes')) {
      savedNotes = JSON.parse(localStorage.getItem('notes'));
    }
    if (savedNotes != null) {
      return savedNotes;
    }
    return [
      { id: 1, title: 'Sample Note', content: 'This is a sample note.' }
    ]
  })
  
  
  
  const [isEditing, setIsEditing] = useState(false);
  
  const [editingID, setEditingID] = useState(null);

  const [isEmpty, setIsEmpty] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if(localStorage.getItem('theme')){
      return JSON.parse(localStorage.getItem('theme'));
    } else
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
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
    localStorage.setItem('theme', JSON.stringify(!isDark))
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

  //////////////////////////////////////////////////////////////// ICONS ////////////////////////////////////////////////
  const plusIcon = (
    <img src={plusSignIcon} className='w-8 h-8 brightness-0 invert'></img>
  )
  const darkIcon =(
    <img src={isDark ? sunIcon : moonIcon} className="w-8 h-8 brightness-0 invert" />
  )


  //////////////////////////////////////////////////////////////// MAIN /////////////////////////////////////////////////

  return (
    <div className={(isDark)?"dark":null}>
      
      <div className={`flex flex-col min-h-screen ${isEmpty ? 'justify-center':null} bg-bg dark:bg-dark-bg text-text dark:text-dark-text`}>
        {/*Note container / Empty Sign*/}
        {!isEmpty ? <NoteContainer notes={notes} onEdit={editNote}></NoteContainer>:<EmptyState isDark={isDark} onClick={() => { setShowNew(true) }}></EmptyState>}
        {/*Add Button*/}
        {!isEmpty?<FixedButton onClick={() => { setShowNew(true) }} content={plusIcon} className="fixed bottom-6 right-6"></FixedButton>:null}
        <FixedButton onClick={changeTheme} content={darkIcon} className={'bottom-6 left-6'}></FixedButton>
        {showNew && <NoteEditScreen onAddNote={addNote} isEditing={isEditing} editingID={editingID} onCloseEdit={onCloseEdit} onDelete={deleteNote} onEdit={onEdit} getNoteByID={getNoteByID}></NoteEditScreen>}
      </div>


    </div>
  )
}

export default App;
