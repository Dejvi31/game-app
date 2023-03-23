import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {MdNavigateBefore,MdNavigateNext} from 'react-icons/md'

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
      <div className='Main-Bg-Container-dark' style={{display: 'flex', alignItems: 'center', justifyContent: 'center',margin: '2rem' }}>
            {games && <img src={games[indexOf].thumbnail} alt='' /> }
            {games && <h2>{games[indexOf].title}</h2> }
            <MdNavigateBefore fontSize={100} cursor='pointer' onClick={() => setIndexOf(indexOf - 1)} />
            <MdNavigateNext fontSize={100} cursor='pointer' onClick={() => setIndexOf(indexOf + 1)}/>
      </div>
        <div className='Bg-Container-dark' style={{display: 'grid', gridTemplateColumns: "1fr 1fr 1fr 1fr",rowGap: '1rem'}}>
            
            {games.map((game,index) => {
              return (
                <div key={index}>
                  <img src={game.thumbnail} alt={game.title}/>
                  <h2>{game.title}</h2>
                </div>
              )
            })}
        </div>
     </div>
    </>
  )
}

export default Main