import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import countReducer from "../features/counter/counterSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        count: countReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
                                            .concat(sagaMiddleware)

});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;