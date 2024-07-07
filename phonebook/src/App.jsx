import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

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
      <Filter newSearch={newSearch} handleSearchPerson={handleSearchPerson}/>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Person filteredPerson={filteredPerson} />
    </div>
  )
}

export default App
