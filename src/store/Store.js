import {createStore, combineReducers } from 'redux';
import { organizations } from '../reducers/reducerOrg';

const reducers = {
    organizations
} //put inside all the reducers

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
    
    rootReducer);