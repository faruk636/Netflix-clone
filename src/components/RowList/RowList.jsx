import {useContext, useState } from 'react'
import Row from '../Row/Row'
import './rowList.css'
import requests from '../../utiles/request'
import YouTube from 'react-youtube';
import { RowContext } from '../../context/RowContextProvider';


const RowList = () => {
  const { trailerUrl } = useContext(RowContext);

     const opts = {
       height: "390",
       width: "100%",
       playerVars: {
         autoplay: 1,
       },
     };

  return (
    <>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNeflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV SHOWS" fetchUrl={requests.fetchTvShow} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
    </>
  );
}

export default RowList