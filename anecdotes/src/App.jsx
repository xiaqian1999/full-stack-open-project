import { useState } from 'react'


const Header = ({text}) => (
  <div>
    <h1>{text}</h1>
  </div>
)

const Anecdotes = ({text}) => (
  <div>
    <p>{text}</p>
  </div>
)

const Votes = ({votes}) => (
  <div>
    <p>has {votes} votes</p>
  </div>
)

const WithMostVotes = ({anecdotes, votesArray}) => {
  const highestVoteCount = Math.max(...votesArray)
  const winnerIndex = votesArray.indexOf(highestVoteCount)
  const winnerQuote = anecdotes[winnerIndex]
  if (highestVoteCount === 0) {
    return (
      <div>
        No votes yet
      </div>
    )
  }

  return (
    <div>
      <p>{winnerQuote}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <div>
    <button onClick={onClick}>
      {text}
    </button>
  </div>
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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdotes = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const voteAnecdotes = () => {
    const votesArray = [...votes]
    votesArray[selected] += 1
    setVotes(votesArray)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdotes text={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button onClick={voteAnecdotes} text="vote" />
      <Button onClick={randomAnecdotes} text="next anecdote"/>

      <Header text="Anecdote with most votes"/>
      <WithMostVotes anecdotes={anecdotes} votesArray={votes} />
    </div>
  )
}

export default App