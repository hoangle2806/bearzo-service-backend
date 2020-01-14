import React , { Component } from 'react';
import SignIn from './login';

class LoginLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render () {
        console.log(this.state)
        return (
            <SignIn 
            onEmailChange={this.handleEmailInput}
            onPasswordChange={this.handlePasswordInput}/>
        )
    }
}

const LoginComponent = LoginLifecycle

export default LoginComponent;