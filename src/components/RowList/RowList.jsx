import {useState } from 'react'
import Row from '../Row/Row'
import './rowList.css'
import requests from '../../utiles/request'


const RowList = () => {

  return (
    <>
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