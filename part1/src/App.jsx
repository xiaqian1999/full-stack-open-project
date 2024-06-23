import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter +1)
  const decreaseByOne = () => setCounter(counter -1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text='+'/>
      <Button onClick={decreaseByOne} text='-'/>
      <Button onClick={setToZero} text='Set to 0' />
    </div>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}
export default App
