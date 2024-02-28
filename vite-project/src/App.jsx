import { useState } from 'react'
import Test from './Test.jsx'

function App() {
  let [count, setCount] = useState(1)
  const doubleValue = () =>{
    count = count * 2
    setCount(count)
  }
  const halfValue = () =>{
    count = count / 2
    setCount(count)
  }
  return (
    <>
    <h1>
      React is counting onclick {count}
    </h1>
    <button onClick={doubleValue}>double it</button>
    <button onClick={halfValue}>half it</button>
      <Test/>
    </>
  )
} 

export default App
