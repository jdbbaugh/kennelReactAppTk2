import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class LocationList extends Component {
  render() {
    return(
      <section className="locations">
        {this.props.locations.map(location =>
          <section key={location.id}>
            <h2>{location.name}</h2>
            <h3>{location.address}</h3>
            <Link className="nav-link" to={`/${location.id}`}>Details</Link>
            <hr />
          </section>
        )}
      </section>
    )
  }
}