import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {MdNavigateBefore,MdNavigateNext} from 'react-icons/md'
import {ToggleContainer} from '../App'
import '../styles/Main.css'
import AllGames from './shorts/AllGames'
import PcGames from './shorts/PcGames'
import BrowserGames from './shorts/BrowserGames'


const Main = () => {
   const {themeSwitch} = useContext(ToggleContainer)
    const Api = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
    const [games,setGames] = useState([{}])
    const [indexOf,setIndexOf] = useState(0)
    const ApiCall = async() => {
        const data = await axios.get(Api,{
            headers: {
                "X-RapidAPI-Key": "e45c2e2ba9msh04d74decbb1c499p1737fcjsn4f10ee599568",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
              }
        })
        setGames(data.data)
    }
  useEffect(() => {
    ApiCall()
  },[])
  return (
    <>
     <div className='container'>
      <div className={themeSwitch ? 'Main-Bg-Container-light' : 'Main-Bg-Container-dark'}>
            {games && <img src={games[indexOf].thumbnail} alt='' /> }
            {games && <h2 className={themeSwitch ? null : 'Game-Title-light'}>{games[indexOf].title}</h2> }
            <MdNavigateBefore fontSize={100} cursor='pointer' onClick={() => setIndexOf(indexOf - 1)} className={indexOf < 1 ? 'disable' : null} style={themeSwitch ? null : {color: 'white'}}/>
            <MdNavigateNext fontSize={100} cursor='pointer' onClick={() => setIndexOf(indexOf + 1)} className={indexOf >= 373 ? 'disable' : null} style={themeSwitch ? null : {color: 'white'}}/>
      </div>
      <div style={{padding: '2rem'}} className={themeSwitch ? 'Bg-Container-Light' : 'Bg-Container-Dark'}>
        
      <AllGames />
      
      <div style={{margin: '2rem 0'}}>
      <PcGames />
      </div>
      <BrowserGames />
      </div>
     </div>
    </>
  )
}

export default Main