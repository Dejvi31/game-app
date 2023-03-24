import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {ToggleContainer} from '../App'
import '../styles/Main.css'
import { useNavigate } from 'react-router-dom'

const Browsergames = () => {
  let navigate = useNavigate()
    const {themeSwitch} = useContext(ToggleContainer)
    const Api = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
    const [games,setGames] = useState([{}])
    const ApiCall = async() => {
        const data = await axios.get(Api,{
           params: { platform: 'browser' },
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
    <div className={themeSwitch ? "Bg-Container-light" : 'Bg-Container-dark'} style={{display: 'grid', gridTemplateColumns: "1fr 1fr 1fr 1fr",gap: '1rem',textAlign: 'center',padding: '1rem'}}>
         <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center' }}>
          <h1  style={themeSwitch ? {cursor: 'pointer'} : {color: 'white',cursor: 'pointer'}}>Browser Games</h1>
          </div>
    {games.map((game,index) => {
      return (
        <div key={index}>
          <img src={game.thumbnail} alt={game.title}/>
          <h2  onClick={() => navigate(`/games/${game.id}`)} className={themeSwitch ? null : 'Game-Title-light'} style={{cursor: 'pointer'}}>{game.title}</h2>
        </div>
      )
    })}
</div>
  )
}

export default Browsergames