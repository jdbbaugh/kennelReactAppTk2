import React, { Component } from "react"
import "./owner.css"

export default class OwnerForm extends Component {
  state = {
    ownerName: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

constructNewOwner = evt => {
  evt.preventDefault()
      const owner = {
          name: this.state.ownerName
      }

      // Create the animal and redirect user to animal list
      this.props.addOwner(owner).then(() => this.props.history.push("/owners"))

}

  render() {
    return(
      <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            placeholder="Owner name" />
                    </div>
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
    )
  }
}