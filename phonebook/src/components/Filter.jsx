const Filter = ({newSearch, handleSearchPerson}) => {
    return(
        <div>
            <div>filter shown with: <input value={newSearch} onChange={handleSearchPerson} /></div>
        </div>
    )
}

export default Filter