import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import EmployeeList from './employee/EmployeeList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

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
        { id: 1, name: "Ryan Tanay", phoneNumber: "(321)342-5903"},
        { id: 2, name: "Emma Beaton", phoneNumber: "(555)555-5555" },
        { id: 3, name: "Dani Adkins", phoneNumber: "(324)049-4039" },
        { id: 4, name: "Adam Oswalt", phoneNumber: "(456)098-0890" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews