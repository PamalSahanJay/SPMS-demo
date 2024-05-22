import { createSlice } from "@reduxjs/toolkit";

interface MovieState {
    movieList: any[];
    movie: any;
}

const initialMovieState: MovieState = {
    movieList: [],
    movie: {}
};

const movieSlice = createSlice({
    name: "movie",
    initialState: initialMovieState,
    reducers: {
        setMovieList(state, action) {
            state.movieList = action.payload;
        },
        setMovie(state, action) {
            state.movie = action.payload;
        }
    }
})

export const { setMovieList, setMovie } = movieSlice.actions

export default movieSlice.reducer

