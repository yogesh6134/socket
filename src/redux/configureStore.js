import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './rootReducer';
import {persistStore} from 'redux-persist';
import {rootSaga} from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export {store, persistor};
