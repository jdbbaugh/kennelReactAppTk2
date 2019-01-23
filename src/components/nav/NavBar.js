import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            search: "search"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value)
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/searchbar"><input name="search" type="text" placeholder="Search" onChange={this.handleChange}/></Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

