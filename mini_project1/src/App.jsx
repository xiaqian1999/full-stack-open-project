import { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = props => <h1>{props.name}</h1>

const Statistic = ({text, value}) => {
  // console.log(props.value)
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }
  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  const average = total / 3
  const positive = clicks.good * (100/total)

  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={clicks.good} />
          <Statistic text="neutral" value={clicks.neutral} />
          <Statistic text="bad" value={clicks.bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />

        </tbody>
      </table>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => 
    setClicks({...clicks, good: clicks.good + 1})
  const handleNeutralClick = () => 
    setClicks({...clicks, neutral: clicks.neutral + 1})
  const handleBadClick = () => 
    setClicks({...clicks, bad: clicks.bad + 1})

  return(
    <div>
      <Header name="Customer feedback" />
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />

      <Header name="Statistics" />
      <Statistics clicks={clicks}/>
    </div>
  )
}

export default App
