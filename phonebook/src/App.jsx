import { useState, useEffect } from 'react'
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
  personService
    .getAll()
    .then(initialPersons => {
        setPersons(initialPersons)
        setFilteredPerson(initialPersons)
    })
}, [])

  const addName = (event) => {
    event.preventDefault()
    const nameExists = persons.filter((person) => person.name.toLowerCase() === newName.toLowerCase())
    const personToAdd = nameExists[0]
    const updatedPerson = { ...personToAdd, number: newNumber}

    //logic is that if name exists, run the update, else run the below
    if(nameExists){
      if(window.confirm(`${personToAdd.name} is already added to phonebook, do you want to replace the old number with the new one?`)){
        personService
          .update(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(
              prevPerson => prevPerson.id !== personToAdd.id ? prevPerson : returnedPerson
            ));
            setFilteredPerson(filteredPerson.map(
              prevFilteredPerson => prevFilteredPerson.id !== personToAdd.id ? prevFilteredPerson : returnedPerson
            ));
            setNewName('');
            setNewNumber('');
        }).catch(error => {
          console.log(error.message);
        });
      }else{
        return;
      }
    }else{
      const userObject = {
        // id: persons.length + 1,
        name: newName,
        number: newNumber
      };

      personService
        .create(userObject)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons));
          setFilteredPerson(filteredPerson.concat(returnedPersons));
          setNewName('');
          setNewNumber('');
        })
    }
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
  
  const deleteName = (id) => {
    const personName = persons.filter((person) => person.id === id)
    if(window.confirm(`Do you want to delete ${personName[0].name}`)){
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
        setFilteredPerson(filteredPerson.filter(person => person.id !== id));
      }).catch(error => {
        console.log(error.message);
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearchPerson={handleSearchPerson}/>

      <h2>Add New Person</h2>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Person filteredPerson={filteredPerson} deleteName={deleteName}/>
    </div>
  )
}

export default App
