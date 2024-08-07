import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({courses}) => 
    <div>
        {courses.map(course =>
            <div key={course.id}>
                <Header course={course.name} />
                <Content course={course.parts} />
                <Total course={course.parts} />
            </div>
        )}
    </div>

export default Course