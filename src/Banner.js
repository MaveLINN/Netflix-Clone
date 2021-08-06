import React, { useState , useEffect } from 'react'
import axios from 'axios'
import requests from './requests'
import './Banner.css'  // 0.2 rem means relative to font-size of root element [ 1rem = 16px]
                       // 0.2 vw means viewport width [ 1vw = 1% of viewport width]

function Banner() {

const [movie,setMovie] = useState([]);

useEffect(() =>{
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]
        )
        return request ;
    }
    fetchData();
},[])


function truncate(str,n){
    return str.length > n ? str.substr(0,n-1) + '...' : str ;
}

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroudPosition: 'center center',
        }}
        >

        <div className="banner__contents">
            <h1 className="banner__title">
              {movie.title || movie.name || movie.original_name}  
            </h1>

            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            
            <h1 className="banner__description">
                {truncate(String(movie.overview),150)}
            </h1>
        </div>
        <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
