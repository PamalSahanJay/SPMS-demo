import { call, put, takeLatest } from "redux-saga/effects";
import { getMovies, getMoviesSuccess, getMoviesFailure } from "./movieSlice";
import * as api from '../../app/api'

function* getMoviesHandler(name: string) : any {
    try {
        console.log("this is sagas")
        const response = yield call(api.fetchMovies,name );
        console.log("response",response.data.Search)
        yield put(getMoviesSuccess(response.data.Search));
    } catch (error) {
        yield put(getMoviesFailure((error as Error).message));
    }
}

export function* watchMoviesSagas() {
    yield takeLatest(getMovies.type as any, getMoviesHandler)
}

