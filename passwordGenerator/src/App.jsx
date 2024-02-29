import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password, setPassword]=useState("")
  const [buttonColor,setButtonColor]= useState('blue')

  
  const passwordGenerator =useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*`~"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)
  }, [length,numberAllowed, charAllowed, setPassword])

  const passwordRef = useRef(null)
  const copyPasswordToClipboard= useCallback(()=>{
    setButtonColor('lightblue')
    setTimeout(() => {
      setButtonColor("blue")
      
    }, 200);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,30)

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 text-orange-400 bg-gray-500">
          <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none  text-white px-2 shrink-0'
          style={{backgroundColor:buttonColor}}
          onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={8}
            max={30}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            className='cursor-pointer'
            />
            <label htmlFor="">lenght:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            className='cursor-pointer'
            />
            <label htmlFor="">numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            className='cursor-pointer'
            />
            <label htmlFor="">charecters</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
