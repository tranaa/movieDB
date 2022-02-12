import { MOVIES_STATE_CHANGE, MOVIE_DETAIL_STATE_CHANGE } from "../constants"

const initialState = {
    movies: [],
    movieDetail: {},
}

export const movies = (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_STATE_CHANGE:
            return {
                ...state,
                movies: action.movies
            }
        case MOVIE_DETAIL_STATE_CHANGE:
            return {
                ...state,
                movieDetail: action.movieDetail
            }
        default:
            return state;
    }
}