import React from 'react'
import SpiceItem from './SpiceItem'
import Filter from './Filter'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

//handles the returned search state from the callback ...
  handleSearchState = (newSearchState) => {
    this.setState({
      search: newSearchState
    })
  }

  //handles the returned four star checkbox state from the the callback that we sent to the child named Filter. I'm wondering if anyone named their child Filter haha
  handleCheckedState = (newCheckedState) => {
    this.setState({
      fourStarOnly: newCheckedState
    })
  }
  

  renderSpices() {
    debugger
    return this.props.spices
      .filter(spice => this.state.fourStarOnly ? spice.rating >= 4 : true)
      .filter(spice => spice.notes.toLowerCase().includes(this.state.search.toLowerCase()))
      .map(spice => (
        <SpiceItem key={spice.id} spice={spice} />
      ))
  }

  render() {
    return (
      <section className="spice-list">
        <Filter search={this.state.search} changeSearchState={this.handleSearchState} fourStarOnly={this.state.fourStarOnly} changeCheckedStated={this.handleCheckedState} />
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList