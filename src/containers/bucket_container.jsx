import React, { Component } from 'react'
import Card from '../components/card'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import styles from '../styles/layouts/board.scss'

class Bucket extends Component {
  render() {
    return (
      <div className="bucket">
        <h1>Bucket: {this.props.bucket.get('title')}</h1>
        <div>
          <input type="text" ref={node => { this.title = node }} />
          <input type="text" ref={node => { this.description = node }} />
          <button onClick={() => this.props.addCard(this.title.value, this.description.value, this.props.bucket.get('bucketId'))}>New Card</button>
        </div>
        <div>
          {this.props.bucket.get('cards').map((card, i) => {
            return <Card card={card} bucketId={this.props.bucket.get('bucketId')} updateCard={this.props.updateCard} key={i} />
          })}
        </div>
      </div>
    )
  }
}

export const BucketContainer = connect(state => { return { state } }, actionCreators)(Bucket);
