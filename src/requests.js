const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = "1bf8713d22d86bb372ffe1f00dc1a550";

const requests ={
    fetchTrending: `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie: `${baseUrl}/movie/action?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovie: `${baseUrl}/movie/comedy?api_key=${API_KEY}&language=en-US`,
    fetchHorrorMovie: `${baseUrl}/discover/movie/action?api_key=${API_KEY}&language=en-US`,
    fetchRomanceMovie: `${baseUrl}/discover/movie/action?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `${baseUrl}/discover/movie/action?api_key=${API_KEY}&language=en-US`,
    fetchUpcoming : `${baseUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US`
}

export default requests ;

// API key - 1bf8713d22d86bb372ffe1f00dc1a550
// request - https://api.themoviedb.org/3/movie/550?api_key=1bf8713d22d86bb372ffe1f00dc1a550
// token - eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmY4NzEzZDIyZDg2YmIzNzJmZmUxZjAwZGMxYTU1MCIsInN1YiI6IjYwZTIxMWI2YmY3NzQ0MDA3NTA4OTMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1DmbvqplRKPIY_OtYecDd7XtrROwVm8Oe3ssFe_G0uo