import React, { Component } from 'react'

class Transaction extends Component {
  render(){
    // console.log(this.props.trans)
    return (
      <tr>
        <td>{this.props.trans.posted_at}</td>
        <td>{this.props.trans.description}</td>
        <td>{this.props.trans.category}</td>
        <td>{this.props.trans.amount}</td>
      </tr>
    )
  }
}

export default Transaction
