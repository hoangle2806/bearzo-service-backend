import React , { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from './login';
import {
    fetchData,
    login
} from '../../actions';

class LoginLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        this.props.fetchData()
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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
    }

    render () {
        return (
            <SignIn 
            onEmailChange={this.handleEmailInput}
            onPasswordChange={this.handlePasswordInput}
            onSubmit={this.handleSubmit}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    mainReducer: state.mainReducer
})

const mapDispatchToProps = {
    fetchData,
    login
}

const LoginComponent = connect(mapStateToProps, mapDispatchToProps) (LoginLifecycle);

export default LoginComponent;