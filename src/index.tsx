import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Airport from './airport/Airport';
import Auth from './member/Auth'
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { airportReducer } from './airport/Airport'
import { authReducer } from './member/Auth'
import { memberChangerReducer } from './member/MyPage'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import MyPage from "./member/MyPage";

const rootReducer = combineReducers({
    airportReducer, authReducer, memberChangerReducer
})

ReactDOM.render(
  <Provider store = {createStore(rootReducer, applyMiddleware(thunk))}>
    <Auth />
    <MyPage/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
