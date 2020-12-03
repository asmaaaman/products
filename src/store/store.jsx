import { compose, createStore, applyMiddleware,combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger';
import rootSaga from "./sagas";
import productReducer from './reducers/productReducer';


const saga = createSagaMiddleware();

const logger = createLogger();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    combineReducers({
        productsState: productReducer,
       
      }),
    composeEnhancers(applyMiddleware(saga, logger))
);

saga.run(rootSaga);

export default store;