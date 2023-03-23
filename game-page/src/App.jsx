import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

export const ToggleContainer = React.createContext()

const App = () => {
  const [themeSwitch, setThemeSwitch] = useState(false)
  return (
    <ToggleContainer.Provider value={{themeSwitch,setThemeSwitch}}>
    <div>
      <NavBar />
    </div>
    </ToggleContainer.Provider>
  )
}

export default App