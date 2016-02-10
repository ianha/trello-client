import Immutable from 'immutable'
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './container/app_container'
import { createStore } from 'redux'
import reducer from './reducer'
import io from 'socket.io-client';
import { Provider } from 'react-redux'

const store = createStore(reducer)

const socket = io.connect("http://localhost:8091");
socket.on('state', state => {
  store.dispatch({type: 'SET_STATE', state})
});

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
