import Immutable from 'immutable'
import React from 'react';
import ReactDOM from 'react-dom';
import Bucket from './components/bucket'

const cards = [
  {
    cardId: 0,
    title: 'Title 1',
    description: 'Description 1'
  },
  {
    cardId: 1,
    title: 'Title 2',
    description: 'Description 2'
  }
]

ReactDOM.render(
  <div>
    <Bucket cards={cards} />
  </div>,
  document.getElementById('app')
);
