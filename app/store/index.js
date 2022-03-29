import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger({
  // ...options
});

const Store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default Store
