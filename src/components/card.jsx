import React, { PropTypes } from 'react'

const Card = React.createClass({
    render: function() {
      return (
        <div>
          <h3>Title: {this.props.title}</h3>
          <div>
            <input type="text" defaultValue={this.props.description} />
            <button onChange={this.props.onclick()}>Update</button>
          </div>
        </div>
      )
    }
})

export default Card
