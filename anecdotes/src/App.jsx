import { useState } from 'react'

const Anecdote = ({text}) => (
  <div>
    <p>{text}</p>
  </div>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  // Math.floor() is a Javascript method that returns the largest integer less than or equal to a given number
  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  return (
    <div>
      <Anecdote text={anecdotes[selected]} />
      <Button onClick={handleRandomClick} text="Next random anecdote" />
    </div>
  )
}

export default App

// The overall logic is that 
// 1. When user click the button once, it will randomly selected one string from the anecdotes array
// 2. We can do so with javascript's generate random number, have each string as index number, when the index called, then return the corresponding array