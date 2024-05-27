import { all } from "redux-saga/effects";
import {watchMoviesSagas} from "../features/movie/movieSagas";    

const rootSaga = function* () {
    yield all([
        watchMoviesSagas()
    ]);
  };

  export default rootSaga;