import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Hello = (props) => {
  console.log(props)
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </>
  )
}

const App = () => {
  const friends = [ 'Peter', 'Maya']
  return (
    <>
      <p>{friends}</p>
    </>
  )
}
export default App
