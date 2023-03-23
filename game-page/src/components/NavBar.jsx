import React, { useContext } from 'react'
import '../styles/NavBar.css'
import { ToggleContainer } from '../App'

const NavBar = () => {
  const {themeSwitch,setThemeSwitch} = useContext(ToggleContainer)
  return (
    <>
     <nav>
        <div className='nav-logo'>
         <span>Quick</span><span>Games</span>
        </div>
        <div className='End'>
            <div className='Toggle-Container'>
                <div className={themeSwitch ? 'Toggle-Switcher' : 'Toggle-Switcher-Moved'}></div>
            </div>
        </div>
     </nav>
    </>
  )
}

export default NavBar