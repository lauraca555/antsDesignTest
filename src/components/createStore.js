import {createStore, combineReducers } from 'redux';
const reducers = {} //put inside all the reducers

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);