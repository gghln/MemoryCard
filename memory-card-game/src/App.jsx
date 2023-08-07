/* eslint-disable react/prop-types */
import './App.css'
import { useState } from 'react'
import CreateHeader from './components/header'
import DisplayGrid from './components/grid'

function App() {
  const [currentScore,setCurrentScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  const [isClicked,setIsClicked] = useState(false)
return (
  <>
    <CreateHeader 
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      bestScore={bestScore}
      setBestScore={setBestScore}
    />
    <DisplayGrid 
      isClicked = {isClicked}
      setIsClicked = {setIsClicked}
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      bestScore={bestScore}
      setBestScore={setBestScore}
    />
  </>
)
}

export default App
