const API_KEY="2912729a78dd43744c9ae1fa072adaeb"

const requests ={

FetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
FetchLatest:`/movie/now_playing?api_key=${API_KEY}&language=en-US`,
FetchDiscover:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
FetchDiscovered:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

}

export default requests;