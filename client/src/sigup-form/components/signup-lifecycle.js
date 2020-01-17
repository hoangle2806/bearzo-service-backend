import React , { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from './signup-view';

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
            email: event.target.value
        })
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

    handleSubmit = () => {
        
    }

    render () {
        return (
            <SignUp 
            />
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

const SignUpComponent = connect(mapStateToProps, mapDispatchToProps) (SignUpLifecycle);

export default SignUpComponent;