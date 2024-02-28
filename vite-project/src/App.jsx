import { useState } from 'react'
import Test from './Test.jsx'

function App() {
  let [count, setCount] = useState(1)
  const addValue = () =>{
    count = count * 2
    setCount(count)
  }
  return (
    <>
    <h1>
      React is counting onclick {count}
    </h1>
    <button onClick={addValue}>ritaban</button>
      <Test/>
    </>
  )
} 

export default App
