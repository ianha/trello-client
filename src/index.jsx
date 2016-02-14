import Immutable from 'immutable'
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './containers/app_container'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import io from 'socket.io-client';
import { Provider } from 'react-redux'
import remoteActionMiddleware from './remote_action_middleware'
import { setState } from './action_creators'


const socket = io.connect("http://localhost:8091");
socket.on('state', state => {
  store.dispatch(setState(state))
});

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(reducer);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>
    ,
    document.getElementById('app')
  );
}

store.subscribe(render);
