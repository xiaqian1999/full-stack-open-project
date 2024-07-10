const Person = ({ filteredPerson, deleteName }) => {
    return(
        <div>
            <ul>
                {filteredPerson.map(person => 
                    <li key={person.id}>
                        {person.name} {person.number} {' '}
                        <button onClick={() => deleteName(person.id)}>delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Person