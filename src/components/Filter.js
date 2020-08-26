import React from 'react'

class Filter extends React.Component {

  
  render() {
    return (
      <div className="card">
        <h2>Filter Spices</h2>
        <div className="filters">
          <div>
            <label>Search: </label>
            <input
              type="text"
              placeholder="Search By Tasting Notes..."
              value={this.props.search}
              onChange={e => this.props.changeSearchState(e.target.value) /* TODO: update search state in parent component */}
            />
          </div>
          <label>
            4 Star Only <input
              type="checkbox"
              value={this.props.fourStarOnly}
              onChange={e => this.props.changeCheckedStated(e.target.checked) /* TODO: update fourStarOnly state in parent component */}
            />
          </label>
        </div>
      </div>
    )
  }
}

export default Filter