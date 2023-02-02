import { configureStore } from '@reduxjs/toolkit';
import ThunkMiddleware  from 'redux-thunk';
import allReducers from './reducers';

const store = configureStore({
    reducer: allReducers,
    middleware: [ThunkMiddleware],
    preloadedState: {}
});

export default store;