import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      id: 1, 
      name: 'Arto Hellas' 
    }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    //Test whether at least one element in the array passes the test implemented by the provided function
    //if it returns true in the array, it finds an element for which the provided function returns true
    //otherwise it returns false, it doesn't modifired the array
    const nameExists = persons.some((person) => person.name === newName)
    if(nameExists){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return;
    }

    const nameObject = {
      id: persons.length + 1,
      name: newName,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App
