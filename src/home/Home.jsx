import React from 'react'
import requests from '../requests';
import Row from '../Row';
// import Banner from './Banner';

const Home = () => {
  return (
    <div>
          <Row title="Netflix Originals" fetchUrl={requests.FetchPopular} isLargeRow={true}/>
      <Row title="Latest Movies" fetchUrl={requests.FetchLatest}/> 
      <Row title="FaviorateMovie" fetchUrl={requests.FetchDiscover}/> 
      
    </div>
  )
}

export default Home
