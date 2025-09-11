import { useEffect, useState } from 'react'
import './row.css'
import axiosInstance from '../../utiles/axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axiosInstance(fetchUrl);
        console.log(data)
        setMovies(data.results)
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies()
  }, [fetchUrl]);

  const baseUrl = 'https://image.tmdb.org/t/p/original'


  const handleTrailer = (movie)=>{

 
    setTrailerUrl('')
  
    movieTrailer(movie?.title||movie?.name||movie?.original_title)
    .then((url)=>{
      if (!url) {
        alert('Trailer not found')
      } else {
        console.log(url)
      const urlParm= new URLSearchParams(new URL(url).search)
      console.log(urlParm)
      console.log(urlParm.get('v'))
      setTrailerUrl(urlParm.get("v"));
      }
      
    })
  

  }

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      }
    }

  return (
    <div className="row">
      <h1 className="row-title">{title}</h1>
      <div className="row-posters">
        {movies?.map((movie, index) => (
          
          <img
            key={index}

            onClick={()=>handleTrailer(movie)}

            src={
              isLargeRow
                ? baseUrl + movie.poster_path
                : baseUrl + movie.backdrop_path
            }
            alt={movie.name}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
          ></img>
        ))}
      </div>
      <div style={{padding:"40px"}}>
        {trailerUrl&& <YouTube videoId={trailerUrl} opts={opts}  />}
      </div>
    </div>
  );
};

export default Row