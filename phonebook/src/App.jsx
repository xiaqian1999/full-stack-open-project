import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [filteredPerson, setFilteredPerson] = useState(props.persons);

  const addName = (event) => {
    event.preventDefault()

    //Some() => Test whether at least one element in the array passes the test implemented by the provided function
    //if it returns true in the array, it finds an element for which the provided function returns true
    //otherwise it returns false, it doesn't modifired the array
    const nameExists = persons.some((person) => person.name === newName)
    if(nameExists){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return;
    }

    const userObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(userObject));
    setNewName('');
    setNewNumber('');
    setFilteredPerson(filteredPerson.concat(userObject));
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchPerson = (event) => {
    setNewSearch(event.target.value);
    const filterItems = persons.filter(person => person.name.toLowerCase().includes(event.target.value));
    setFilteredPerson(filterItems);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input value={newSearch} onChange={handleSearchPerson} /></div>

      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPerson.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App
