import { useState } from "react"

function App() {
const [color,setColor]= useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 ">
        <div className="flex flex-wrap bg-white px-3 py-2 gap-3 rounded-3xl">
          <button className="px-5 py-2  rounded-3xl" onClick={()=>{setColor("red")}} style={{backgroundColor:"red"}}>red</button>
          <button className="px-5 py-2  rounded-3xl" onClick={()=>{setColor("green")}} style={{backgroundColor:"green"}}>green</button>
          <button className="px-5 py-2  rounded-3xl" onClick={()=>{setColor("blue")}} style={{backgroundColor:"blue"}}>blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
