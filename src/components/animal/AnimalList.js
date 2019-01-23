import React, { Component } from 'react'

export default class AnimalList extends Component {
  render() {
    return(
      <div className="animals">
        {this.props.animals.map(animal =>
        <section key={animal.id}>
          <h4>{animal.name}</h4>
          <p> the {animal.type}</p>
        </section>)}
      </div>
    )
  }
}