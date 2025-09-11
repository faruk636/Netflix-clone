import { createContext, useState } from "react"
import movieTrailer from "movie-trailer"


export const RowContext= createContext()

const RowContextProvider = ({children}) => {

    const [trailerUrl,setTrailerUrl] = useState('')
    
    const handleTrailer = (movie) => {
      setTrailerUrl("");

      movieTrailer(movie?.title || movie?.name || movie?.original_title).then(
        (url) => {
          if (!url) {
            alert("Trailer not found");
          } else {
            // console.log(url);
            const urlParm = new URLSearchParams(new URL(url).search);
            // console.log(urlParm);
            // console.log(urlParm.get("v"));
            setTrailerUrl(urlParm.get("v"));
            scrollTo({ top: 400, behavior: "smooth" });
          }
        }
      );
    };


    const data= {
        trailerUrl,setTrailerUrl,handleTrailer
    }
  return (
    <RowContext value={data}>{children}</RowContext>
  )
}

export default RowContextProvider