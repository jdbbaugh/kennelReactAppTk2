import React, { Component } from "react"
import "./Employee.css"

export default class EmployeeForm extends Component {
  state = {
    employeeName: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

constructNewEmployee = evt => {
  evt.preventDefault()
      const employee = {
          name: this.state.employeeName
      }

      // Create the animal and redirect user to animal list
      this.props.addEmployee(employee).then(() => this.props.history.push("/employees"))

}

  render() {
    return(
      <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="employeeName"
                            placeholder="Employee name" />
                    </div>
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
    )
  }
}