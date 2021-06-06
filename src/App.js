import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import LoginForm from './LoinForm.js';
import Home from './Home.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  signIn(username, password) {

    this.setState({
      user: {
        username,
        password,
      }
    })
  }

  signOut() {
    this.setState({ user: null })
  }

  render() {
    return (
      <div>
        {
          (this.state.user) ?
            <Home
              user={this.state.user}
              onSignOut={this.signOut.bind(this)}
            />
            :
            <LoginForm
              onSignIn={this.signIn.bind(this)}
            />
        }
      </div>
    )

  }

}

export default App;
