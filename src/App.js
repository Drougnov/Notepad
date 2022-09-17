import React from 'react';
import Sidebar from './Components/Sidebar';
import Editor from './Components/Editor';
import Split from 'react-split';
import { nanoid } from 'nanoid';

export default function App(){
  const [notes, setNotes] = React.useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || '')

  function createNewNote(){
    const newNote = {
      id : nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote,...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  return(
    <main>
      {notes.length > 0
      ?
      <Split
      sizes={[15, 85]} 
      direction="horizontal"
      className='split'
    >
      <Sidebar />
      <Editor />
    </Split> :
    <section className='no-notes'>
      <h2>You have no notes</h2>
      <button 
        className='first-note'
        onClick={createNewNote}
      >Create one now</button>
    </section>
    }
    </main>
  )
}