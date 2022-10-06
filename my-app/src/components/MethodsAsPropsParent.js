import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    HandleSignIn = () => {
        this.setState({
            isLoggedIn : true
        })
        console.log(this)
    }

    HandleSignOut = () => {
        this.setState({
            isLoggedIn : false
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild
                    isLoggedIn={this.state.isLoggedIn}
                    HandleSignIn={this.HandleSignIn}
                    HandleSignOut={this.HandleSignOut} />
            </div>
        )
    }
}

export default MethodsAsPropsParent