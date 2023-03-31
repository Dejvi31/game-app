import React, { useContext,useEffect, useState } from 'react'
import axios from 'axios'
import { ToggleContainer } from '../App'
import '../styles/GameInfo.css'
import { useParams } from 'react-router-dom'


const GameInfo = () => {
  const {id} = useParams()
    const {themeSwitch} = useContext(ToggleContainer)
    const Api = 'https://free-to-play-games-database.p.rapidapi.com/api/game'
    const [games,setGames] = useState([])

    const ApiCall = async() => {
        const data = await axios.get(Api,{
            params: {id: `${id}`},
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
    <div className={themeSwitch ? 'Main-Bg-Container-light' : 'Main-Bg-Container-dark'}>
       <div className='GameInfo'>
        <div className='GameInfo-Top'>
           <h1 className={themeSwitch ? null : 'GameInfoP'}>{games.title}</h1>
           <img id='GameInfoImg' src={games.thumbnail}  alt=''/>
           <p className={themeSwitch ? null : 'GameInfoP'}>Description: {games.short_description}</p>
           <p className={themeSwitch ? null : 'GameInfoP'}>Genre: {games.genre}</p>
           <p className={themeSwitch ? null : 'GameInfoP'}>Platform: {games.platform}</p>
           <div className='Download-Container'>
           <a id={themeSwitch ? 'GameInfoLink-light' : 'GameInfoLink-dark'} href={games.game_url} target='_blank' rel='noopener noreferrer'>Download</a>
           </div>
        </div>
        <div className='GameInfo-Side'>
            <div className='GameInfo-Side-Title'>
           <h3 className={themeSwitch ? null : 'GameInfoP'}>Minimum System Requirements</h3>
            </div>
            <div className='GameInfo-Side-Text'>
           <p className={themeSwitch ? null : 'GameInfoP'}>Graphics: {games?.minimum_system_requirements?.graphics} </p>   
           <p className={themeSwitch ? null : 'GameInfoP'}>Memory: {games?.minimum_system_requirements?.memory}</p>
           <p className={themeSwitch ? null : 'GameInfoP'}>OS: {games?.minimum_system_requirements?.os}</p>
           <p className={themeSwitch ? null : 'GameInfoP'}>Processor: {games?.minimum_system_requirements?.processor}</p>
           <p className={themeSwitch ? null : 'GameInfoP'}>Storage: {games?.minimum_system_requirements?.storage}</p>
            </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default GameInfo