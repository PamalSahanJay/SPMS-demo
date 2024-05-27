import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MovieState {
    movieList: any[];
    loading: boolean;
    error : string | null;
}

const initialMovieState: MovieState = {
    movieList: [],
    loading: false,
    error: null
};

const movieSlice = createSlice({
    name: "movie",
    initialState: initialMovieState,
    reducers: {
        getMovies: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        getMoviesSuccess: (state, action: PayloadAction<any>) => {
            state.movieList = action.payload;
            state.loading = false;
            state.error = null;
        },
        getMoviesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { getMovies, getMoviesSuccess, getMoviesFailure } = movieSlice.actions

export default movieSlice.reducer

