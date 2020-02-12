import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: [],
      searchBar: ''
    }
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(
        (transObjs) => {
          this.setState({
            transactions: transObjs
          });
        }
      )
  }

  handleChange = (event) => {
    // your code here
    // console.log(event.target.value)
    this.setState({
      searchBar: event.target.value
    })
    console.log(this.state.searchBar)
  }

  updatedTransactions = () => {
    return this.state.transactions.filter(trans => 
      {return trans.description.includes(this.state.searchBar) || trans.category.includes(this.state.searchBar)})
  }

  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        {this.state.searchBar === '' ? <TransactionsList transactions={this.state.transactions}/> 
        : 
        <TransactionsList transactions={this.updatedTransactions()}/>}
      </div>
    )
  }
}

export default AccountContainer
