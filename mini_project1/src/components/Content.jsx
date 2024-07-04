import Parts from './Parts'
const Content = ({course}) => {
    return(
        <div>
            {course.map(parts => 
                <div key={parts.id}>
                    <Parts name={parts.name} exercises={parts.exercises} />
                </div>
            )}
        </div>
    )
}

export default Content