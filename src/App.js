import Square from './Square'
import Input from './Input'
import { useState } from 'react'



function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <Square 
      colorValue={colorValue}
      hexValue = {hexValue}
      isDarkText = {isDarkText}
      />
      <Input 
      setColorValue= {setColorValue}
      colorValue={colorValue}
      setHexValue = {setHexValue}
      setIsDarkText = {setIsDarkText}
      isDarkText = {isDarkText}
      />
    </div>
  );
}

export default App;
