import { MOVIES_STATE_CHANGE, MOVIE_DETAIL_STATE_CHANGE } from '../constants/index'
import { API_KEY } from "@env"

const API_VALUE = `api_key=${API_KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3';
const DISCOVER_API_URL = BASE_URL + '/discover/movie?' + API_VALUE + '&language=en-US&sort_by=popularity.desc&include_video=true&primary_release_date.lte=2022&with_original_language=en';
const MOVIE_DETAIL_API_URL = BASE_URL + '/movie/'

export function fetchDiscoverMovies(page=1) {
    return ((dispatch) => {
        fetch(DISCOVER_API_URL + `&page=${page}`)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: MOVIES_STATE_CHANGE, movies: data})
        })
    })
}

export function fetchMovieDetail(id) {
    return ((dispatch) => {
        fetch(MOVIE_DETAIL_API_URL + `${id}?` + API_VALUE + '&language=en-US')
        .then(res => res.json())
        .then(data => {
            dispatch({ type: MOVIE_DETAIL_STATE_CHANGE, movieDetail: data})
        })
    })
}