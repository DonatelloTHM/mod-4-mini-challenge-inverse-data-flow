import React from 'react'

class NewSpice extends React.Component {
  state = {
    title: "",
    image: "",
    notes: "",
    description: "",
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("submitting...")
    this.props.newSpiceHandler(this.state)
  }
  //handles the state for the form inputs
  handleFormState = evt => {
    this.setState({[evt.target.name]: evt.target.value})
  }
  

  render() {
    return (
      <div className="card">
        <h2>New Spice</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input onChange={this.handleFormState} value={this.state.title} type="text" name="title" />
          <label htmlFor="image">Image URL: </label>
          <input onChange={this.handleFormState} value={this.state.image} type="text" name="image" />
          <label htmlFor="notes">Tasting Notes: </label>
          <input onChange={this.handleFormState} value={this.state.notes} type="text" name="notes" />
          <label htmlFor="notes">Description: </label>
          <textarea onChange={this.handleFormState} value={this.state.description} type="text" name="description" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewSpice