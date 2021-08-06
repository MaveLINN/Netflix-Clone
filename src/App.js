import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
import Creator from './Creator'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow // by default isLargeRow is true
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} />
      <Creator />
    </div>
  );
}

export default App;
