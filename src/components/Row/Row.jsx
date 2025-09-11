import { useContext, useEffect, useState } from 'react'
import './row.css'
import axiosInstance from '../../utiles/axios'
import { RowContext } from '../../context/RowContextProvider';

const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const { handleTrailer } = useContext(RowContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axiosInstance(fetchUrl);
        setMovies(data.results)
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies()
  }, [fetchUrl]);

  const baseUrl = 'https://image.tmdb.org/t/p/original'


  

 

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
    </div>
  );
};

export default Row