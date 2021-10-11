import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { organizations } from '../reducers/reducerOrg';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = {
    organizations
} //put inside all the reducers

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
    
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));
    