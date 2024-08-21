import { Input } from "postcss"
import Square from "./Components/Square/Square"
import BoxInput from "./Components/BoxInput/BoxInput"
import { useState } from "react"

function App() {
  const[colorValue,setColorValue] = useState('')
  const[hexColorValue,setHexColorValue]=useState('')
  const[isTextColor,setTextColorValue]=useState(true)
  return (
    <>
      <Square
        colorValue={colorValue}
        hexColorValue={hexColorValue}
        isTextColor={isTextColor}
      />
      <BoxInput 
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexColorValue={hexColorValue}
        setHexColorValue={setHexColorValue}
        isTextColor={isTextColor}
        setTextColorValue={setTextColorValue}
      />
    </>
  )
}

export default App
