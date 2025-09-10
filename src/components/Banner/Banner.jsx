import './banner.css'
import axios from '../../utiles/axios'
import requests from '../../utiles/request'
import { useEffect, useState } from 'react'


const Banner = () => {

    const [movie,setMovie] = useState({})


    useEffect(()=>{
        const fetchMovie = async ()=>{
            try {
                const {data} = await axios(requests.fetchNeflixOriginals) 
                setMovie(data.results[Math.floor(Math.random() * data.results.length)])
                console.log(
                  data.results[Math.floor(Math.random() * data.results.length)]
                );
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovie();
    },[])

    const truncate = (str,n)=>{
        return str?.length > n ? str.substr(0,n-1) + '...' : str;
    }


  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "none",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play">Play</button>
          <button className="banner-button">My Lists</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview,150)}</h1>
      </div>
      <div className='banner-fade'/>
    </div>
  );
}

export default Banner