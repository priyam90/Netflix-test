import axios from 'axios';

// base url to make to the request to movie database

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",

});

export default instance;

