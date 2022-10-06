import React, { Component } from 'react'

export class EventsClass extends Component {
  clickHandler(){
    console.log("clicked the class button")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me - Class Component</button>
      </div>
    )
  }
}

export default EventsClass