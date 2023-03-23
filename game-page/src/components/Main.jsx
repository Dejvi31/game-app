import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
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
        console.log(data.data)
    }
  useEffect(() => {
    ApiCall()
  },[])
  return (
    <>
     <div className='container'>
        <div className='Bg-Container-dark'>
            {games && <img src={games[indexOf].thumbnail} alt='' /> }
            {games && <h2>{games[indexOf].title}</h2> }
        </div>
     </div>
    </>
  )
}

export default Main