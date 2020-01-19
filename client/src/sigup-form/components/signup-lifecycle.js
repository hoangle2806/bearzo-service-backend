import React , { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from './signup-view';
import {register} from '../../actions'

class SignUpLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    handlePasswordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleEmailInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = {...this.state}
        this.props.register(payload)
    }

    render () {
        return (
            <SignUp 
            onPasswordInput={this.handlePasswordInput}
            onEmailInput={this.handleEmailInput}
            onNameInput={this.handleNameInput}
            onSubmit={this.handleSubmit}
            />
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    register
}

const SignUpComponent = connect(mapStateToProps, mapDispatchToProps) (SignUpLifecycle);

export default SignUpComponent;