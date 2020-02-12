import React, { Component } from 'react'

class Search extends Component {
  render(){
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={this.props.handleChange}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}
export default Search
