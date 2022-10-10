import React, { Component } from 'react'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        name: '',
        category: 'website',
        comment: '',
    }
  }
  ChangeName = (event) => {
    this.setState({
        name: event.target.value
    })
  }
  ChangeCategory = (event) => {
    this.setState({
        category: event.target.value
    })
  }
  ChangeComment = (event) => {
    this.setState({
        comment: event.target.value
    })
  }
  HandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.HandleSubmit}>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input value={this.state.name}
                    onChange={this.ChangeName}
                    id='id-name' 
                    name='name' 
                    type='text'/>
            </div>
            <div>
                <label htmlFor='id-category'>Query category:</label>
                <select value={this.state.category} 
                        onChange={this.ChangeCategory} 
                        id='id-category' 
                        name='category'> 

                    <option value='website'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea value={this.state.comment} 
                          onChange={this.ChangeComment} 
                          id='id-comments' 
                          name='comments'/>
            </div>
            <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default ControlledForm