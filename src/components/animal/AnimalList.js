import React, { Component } from 'react'

export default class AnimalList extends Component {
  render() {
    const animals = this.props.animals
    const owners = this.props.owners
    let ownerToPet = []
    owners.forEach(owner => {
      animals.forEach(animal =>{
        if (owner.petId === animal.id) {
          const ownerIs = {
            owner: owner.name,
            ownerId: owner.id,
            pet: animal.name,
            petType: animal.type
          }
          ownerToPet.push(ownerIs)
        }
      })
    })

    return(
      <div className="animals">
        {ownerToPet.map(ownerAndPet =>
          <section key={ownerAndPet.ownerId}>
            <h3>Owner-{ownerAndPet.owner}</h3>
            <p>Pet-{ownerAndPet.pet} the {ownerAndPet.petType}</p>
          </section>
        )}
      </div>
    )
  }
}