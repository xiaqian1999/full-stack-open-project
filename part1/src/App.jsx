import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => () => {
    console.log('hello, ', who)
  }

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
  }
    
  return (
    <div>
      {value}
      <button onClick={hello('something')}>button</button>
      <button onClick={setToValue(1000)}>Thousand</button>
      <button onClick={setToValue(0)}>Reset</button>
      <button onClick={setToValue(value + 1)}>Increment</button>
    </div>
  )
}

export default App
