import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloaded : true,
         isLoggedIn: false,
      }
    }
  render() {
    return (
      <div>
        <UserData isloaded={this.state.isloaded} />
        <UserMessage isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}

export default NestingComponents