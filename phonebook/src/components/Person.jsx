const Person = ({ filteredPerson }) => {
    return(
        <div>
            <ul>
                {filteredPerson.map(person => 
                    <li key={person.id}>{person.name} {person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default Person