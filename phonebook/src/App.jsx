import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [filteredPerson, setFilteredPerson] = useState([]);

useEffect(() => {
  personService.getAll()
  .then(initialPersons => {
      setPersons(initialPersons)
      setFilteredPerson(initialPersons)
  })
}, [])

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

    personService.create(userObject)
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons));
        setNewName('');
        setNewNumber('');
        setFilteredPerson(filteredPerson.concat(returnedPersons));
      })
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
