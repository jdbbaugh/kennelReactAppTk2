import React, { Component } from 'react'

export default class OwnerList extends Component {
  render() {
    return(
      <div className="owners">
        {this.props.owners.map(owner =>
          <section key={owner.id}>
            <h4>{owner.name}</h4>
            <p>{owner.phoneNumber}</p>
          </section>)}
      </div>
    )
  }
}