import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { BucketContainer } from './bucket_container'
import dragula from 'dragula'

class App extends Component {
  moveCard(el, source) {
    const cardId = el.getAttribute('data-card-id')
    const cards = source.querySelectorAll('.card')
    const bucketId = source.parentElement.getAttribute('data-bucket-id')
    let index = 0
    for (var i=0; i < cards.length; i++) {
      if (cards[i].getAttribute('data-card-id') == cardId) {
        index = i
        break
      }
    }
    this.props.moveCard(bucketId, cardId, index)
  }
  moveBucket(el, target) {
    const bucketId = el.getAttribute('data-bucket-id')
    const buckets = target.querySelectorAll('.bucket')
    let index = 0
    for (var i=0; i < buckets.length; i++) {
      if (buckets[i].getAttribute('data-bucket-id') == bucketId) {
        index = i
        break
      }
    }
    this.props.moveBucket(bucketId, index)
  }
  componentDidMount() {
    const containers = Array.from(document.querySelectorAll('.card-container'))
    containers.push(document.querySelector('#bucket-container'))
    dragula(containers, {
      accepts: function (el, target, source, sibling) {
        return target === source
      }
    }).on('drop', (el, target, source, sibling) => {
      if (source.className == 'card-container') {
        this.moveCard(el, source)
      } else if (source.id == 'bucket-container') {
        this.moveBucket(el, target)
      }
    })
  }
  render() {
    return (
      <div>
        <h1>App container</h1>
        <div>
          <input type="text" ref={node => { this.title = node }} />
          <button onClick={() => this.props.createBucket(this.title.value)}>New Bucket</button>
        </div>
        <div id="bucket-container">
          {this.props.buckets.map((bucket, i) => {
            return <BucketContainer bucket={bucket} key={i} />
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    buckets: state.get('buckets')
  }
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);
