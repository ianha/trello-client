import Card from './card'
import React from 'react'
import Immutable from 'immutable'
import createFragment from 'react-addons-create-fragment'

const Bucket = React.createClass({
    render: function() {
      return (
        <div>
          {this.props.cards.map((card, i) => {
            return <Card {...card} key={i} onclick={() => {}} />
          })}
        </div>
       )
    }
})

export default Bucket
