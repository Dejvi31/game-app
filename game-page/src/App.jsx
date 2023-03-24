import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Main from './components/Main'
import NavBar from './components/NavBar'
import Allgames from './components/Allgames'
import Pcgames from './components/Pcgames'
import Browsergames from './components/Browsergames'
import GameInfo from './GameInfo/GameInfo'



export const ToggleContainer = React.createContext()

const App = () => {
  const [themeSwitch, setThemeSwitch] = useState(true)
  return (
    <Router>
    <ToggleContainer.Provider value={{themeSwitch,setThemeSwitch}}>
    <NavBar />
    
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/allgames' element={<Allgames />} />
      <Route path='/pcgames' element={<Pcgames />} />
      <Route path='/browsergames' element={<Browsergames />} />
      <Route path='/games/:id' element={<GameInfo />}/>
     </Routes>

    
 
    </ToggleContainer.Provider>
    </Router>
  )
}

export default App