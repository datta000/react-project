import { useState } from 'react'
import Test from './Test.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      React what
    </h1>
      <Test/>
    </>
  )
} 

export default App
