import React, { Component } from 'react'
import Transaction from './Transaction'

class TransactionsList extends Component {


renderTransaction = () => {
  return this.props.transactions.map(tranObj => {
    return (
      <Transaction trans={tranObj} />
    )
  })
}


  render(){
    // console.log(this.props.transactions)

      return (
        <table className="ui celled striped padded table">
          <tbody>
            <tr>
              <th>
                <h3 className="ui center aligned header">
                  Posted At
                </h3>
              </th>
              <th>
                <h3 className="ui center aligned header">
                  Description
                </h3>
              </th>
              <th>
                <h3 className="ui center aligned header">
                  Category
                </h3>
              </th>
              <th>
                <h3 className="ui center aligned header">
                  Amount
                </h3>
              </th>
            </tr>

            {this.renderTransaction()}
            

          </tbody>
        </table>
      )
    }
  }

export default TransactionsList
