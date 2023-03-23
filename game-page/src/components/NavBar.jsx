import React, { useContext } from 'react'
import '../styles/NavBar.css'
import { ToggleContainer } from '../App'

const NavBar = () => {
  const {themeSwitch,setThemeSwitch} = useContext(ToggleContainer)
  return (
    <>
     <nav style={themeSwitch ? {backgroundColor: 'orangered'} : null}>
        <div className='nav-logo'>
         <span id='LogoName1' style={themeSwitch ? {color: '#302e2e'} : null}>Epa</span><span id='LogoName2' style={themeSwitch ? {color: 'white'} : null}>Games</span>
        </div>
        <div className='End'>
            <div className='Toggle-Container' onClick={() => setThemeSwitch(!themeSwitch)}>
                <div className={themeSwitch ? 'Toggle-Switcher' : 'Toggle-Switcher-Moved'}></div>
            </div>
        </div>
     </nav>
    </>
  )
}

export default NavBar