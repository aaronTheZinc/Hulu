
const API_KEY: string = `ba06da6caea456308ab31e571712abac`

export default {
    fetchTrending:  {
        title: `Trending`,
        url: `/trending/all/week?api_key=${API_KEY}&language=en-us`
    },
    fetchTopRated: {
        title: `Top Rated`,
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`
    },
    fetchActionMovies: {
        title: `Action`,
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: `Comedy`,
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: `Horror`,
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: `Romance`,
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery: {
        title: `Mystery`,
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchScifi: {
        title: `Sci-Fi`,
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: `Western`,
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: `Animation`,
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTv: {
        title: `TV Movie`,
        url: `/discovery/movie?api_key=${API_KEY}&with_genres=10770`
    }
}