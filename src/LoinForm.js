import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import styles from './index.css'

class LoginForm extends Component {

    handleSignIn(e) {
        e.preventDefault()
        if (this.refs.username.value == "foo" && this.refs.password.value == "bar") {
            let username = this.refs.username.value
            let password = this.refs.password.value
            this.props.onSignIn(username, password)

        } else {
            alert("Please enter a valid Username and Password.");
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSignIn.bind(this)}>
                <h3>Sign in</h3>
                <div className='form-group row'>
                    <input className='input' ref="username" type='text' placeholder='Username' />
                </div>
                <div className='form-group row'>
                    <input className='input' ref="password" type='password' placeholder='Password' />
                </div>
                <div className='form-group row'>
                    <input className='btn' type="submit" value="Login" />
                </div>
            </form>
        )
    }

}
export default LoginForm;
