import React, { useState } from 'react'
import './App.css'
import Main from './components/Main'
import NavBar from './components/NavBar'

export const ToggleContainer = React.createContext()

const App = () => {
  const [themeSwitch, setThemeSwitch] = useState(true)
  return (
    <ToggleContainer.Provider value={{themeSwitch,setThemeSwitch}}>
    <div>
      <NavBar />
      <Main />
    </div>
    </ToggleContainer.Provider>
  )
}

export default App