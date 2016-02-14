import React, { Component } from 'react'

export default class Card extends Component {
    render() {
      return (
        <div>
          <h3>Story: {this.props.card.get('title')}</h3>
          <div>
            <input type="text" defaultValue={this.props.card.get('description')} ref={node => { this.description = node }} />
            <button onClick={() => this.props.updateCard(this.description.value, this.props.bucketId, this.props.card.get('cardId'))}>Update</button>
          </div>
        </div>
      )
    }
}
