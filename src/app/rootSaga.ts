import { all } from "redux-saga/effects";

const rootSaga = function* () {
    yield all([
        // call(movieSaga),
        // call(countSaga)
    ]);
  };

  export default rootSaga;