import React from 'react';
import ReactDOM from 'react-dom';
import './bulma.css';
import App from './components/App';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'

const logger = store => next => action => {
  //  console.group(action.type)
  //  console.info('dispatching', action)
  let result = next(action)
  //  console.log('next state', store.getState())
  //  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger,thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
