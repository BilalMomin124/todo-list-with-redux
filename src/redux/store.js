import reducer from './reducer';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from './localStorage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistedSate = loadState();

const store = createStore(reducer, persistedSate, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;


