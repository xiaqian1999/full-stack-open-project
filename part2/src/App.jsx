import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNotes = (event) => {
    event.preventDefault()
    //This noteObject is a new array index variable been created, after user input, we want to add it inside to the notes array
    const noteObject = {
      content: newNote,
      //With the help of the Math.random() function, our note has a 50% chance of being marked as important
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    //The concat is used to marge 2 or more arrays, it does not change the exisiting arrays, but instead returns a new array
    setNotes(notes.concat(noteObject))
    // Reset  the value of the controlled input element by calling the setNewNote function of the newNote state
    setNewNote('')
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>

      <div>
      {/* () => setShowAll(!showAll)  switches the value of showAll from T to F and vice versa */}
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>

      <form action="" onSubmit={addNotes}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
