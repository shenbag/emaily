
import React from 'react';
import reactDOM from 'react-dom' ;
import App from './component/App' ;
import { Provider } from 'react-redux'
import { createStore , applyMiddleware  } from 'redux'
import reducers from './reducers'
import  'materialize-css/dist/css/materialize.min.css'

import reduxThunk from 'redux-thunk'
const store = createStore(reducers, {} , applyMiddleware(reduxThunk));

reactDOM.render (<Provider store={store}><App/></Provider> , document.querySelector('#root'))

