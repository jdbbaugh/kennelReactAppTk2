import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import "./Kennel.css"


export default class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        {id: 1, name:"Grey", type: "cat"},
        {id: 2, name:"Blaze", type: "dog"},
        {id: 3, name:"Jeff", type: "giraffe"},
        {id: 4, name:"Jim", type: "rinosaurus"},
        {id: 5, name:"Hip", type: "hip-hop-opottomus"}
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", petId: 1},
        { id: 2, name: "Emma Beaton", petId: 2 },
        { id: 3, name: "Dani Adkins", petId: 3 },
        { id: 4, name: "Adam Oswalt", petId: 4 },
        { id: 5, name: "Fletcher Bangs", petId: 1 },
        { id: 6, name: "Angela Lee", petId: 5 }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} owners={this.state.owners} />
            </article>
        )
    }
}

