import React, { Component } from 'react'
import { Link } from "react-router-dom";
import dude from "./owner.png"
import "./owner.css"

export default class OwnerList extends Component {
render() {
return (
    <React.Fragment>
    <div className="ownerButton">
        <button type="button"
                className="btn btn-success"
                onClick={() => {
                    this.props.history.push("/owners/new")}
                }>
            Add Owner
        </button>
    </div>
    <section className="owners">
    {
        this.props.owners.map(owner =>
            <div key={owner.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={dude} alt="owner-img" className="icon--owner" />
                        {owner.name}
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                        <a href="#"
                        onClick={() => this.props.deleteOwner(owner.id)}
                        className="card-link">Delete</a>
                    </h5>
                </div>
            </div>
        )
    }
    </section>
    </React.Fragment>
)
}
}