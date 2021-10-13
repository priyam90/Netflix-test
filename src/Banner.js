import React,{useState,useEffect} from 'react'
import axios from 'axios'
import requests from './requests';
import './banner.css'

const base_url="https://image.tmdb.org/t/p/original/";


const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
     async function fetchData(){
        const request= await axios.get(requests.FetchDiscovered)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]        );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str,n) {
        return str?.length >n ? str.substr(0,n-1)+"..." : str;
    }
    return (
       <header className="banner"
           style={{ backgroundSize:"cover", backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition:"center center",
        }}>
           <div className="banner__contents">

               <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
               <div className="banner__buttons">
                   <button className="banner__button">Play</button>
                   <button className="banner__button">My List</button>
               </div>
               <h1 className="banner__description">{movie?.overview}</h1>
           </div>
       </header>
    );
}

export default Banner
