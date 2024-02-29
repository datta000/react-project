import { useState } from 'react'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-white rounded w-32 p-2 m-5'>tailwind test</h1>
      <Card name="Ritaban"/>
      <Card name="anything"/>
    </>
  )
}

export default App
