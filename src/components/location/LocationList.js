import React, { Component } from 'react'

export default class LocationList extends Component {
  render() {
    return(
      <section className="locations">
        {this.props.locations.map(location =>
          <section key={location.id}>
            <h2>{location.name}</h2>
            <h3>{location.address}</h3>
            <hr />
          </section>
        )}
      </section>
    )
  }
}