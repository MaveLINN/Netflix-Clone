import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({title,fetchUrl,isLargeRow}) {

    const [movies,setMovies] = useState([]);  // react hooks - useState are short term memory -- memory vanishes when page reloads
    const [trailerUrl,setTrailerUrl] = useState(""); 

    useEffect(()=>{ // we can't use async things in useEffect ... here we doing in a special way 
        async function fetchData() {
            const request = await axios.get(fetchUrl);    // it waits untill it gets the response from the server
            setMovies(request.data.results);
            return request ;
        }
        fetchData();
    },[fetchUrl]); // if [] empty it will run only once the page loads... if [movies] it will run every time when the movies value changes
    // any variable which is pulled outside of useEffect and used inside useEffect must be include in .... ,[fetchUrl])


    const opts={
        height:"360",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    }

    const handleClick=(movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }else {
            movieTrailer(movie.name || movie.title || movie.original_name || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(error=>{console.log(error)})
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/* several element in the row posters */}
                {movies.map(movie =>(
                <img 
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    className={`row__poster ${isLargeRow && 'row__posterLarge'}`} // default class is row__poster and if isLargeRow true then it will alse have row__posterLarge
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.original_title}  
                />
                ))}
            </div>
            {
            trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> // when we have trailer url then only it will show trailer
            }
        </div>
    )
}

export default Row

// unable to resolve the tree dependencies - npm config set legacy-peer-deps true