import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { BucketContainer } from './bucket_container'

class App extends Component {
  render() {
    return (
      <div>
        <h1>App container</h1>
        <div>
          <input type="text" ref={node => { this.title = node }} />
          <button onClick={() => this.props.createBucket(this.title.value)}>New Bucket</button>
        </div>
        <div>
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
