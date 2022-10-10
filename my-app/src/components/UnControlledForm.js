import React, { Component } from 'react'

export class UnControlledForm extends Component {
  constructor(props) {
    super(props)
    this.inputName = React.createRef()
    this.inputCategory = React.createRef()
    this.inputComment = React.createRef()
  }
  HandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputName.current.value)
    console.log(this.inputCategory.current.value)
    console.log(this.inputComment.current.value)
  }
  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.HandleSubmit}>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input
                    ref={this.inputName}
                    id='id-name' 
                    name='name' 
                    type='text'/>   
            </div>
            <div>
                <label htmlFor='id-category'>Query category:</label>
                <select ref={this.inputCategory} id='id-category' name='category'> 
                    <option value='website'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea ref={this.inputComment} id='id-comments' name='comments'/>
            </div>
            <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default UnControlledForm