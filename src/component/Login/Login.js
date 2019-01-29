import React, { Component } from 'react';
import imageLogin from '../Global/assets/images/logo-acidlabs-titulo-login.png';
import './Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '123',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  }

  validateForm() {
    // return this.state.email.length > 0 && this.state.password.length > 0;
    return this.state.email.length > 0;
  }

  handleClick() {
    console.log("Submitted");
  }

  render() {
    return (
        <form className="App-login" onSubmit={this.submitForm}>

          <div className="title-wrapper">
            <img src={imageLogin} className="imageLogin" />
            <h1 className="titleLogin">
              Login
            </h1>
          </div>
          
          <input type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="email"></input>
          <input type="password" placeholder="password"></input>
  
          {/* <button onClick={activateLasers} */}
        
          <button 
            className="block" 
            disabled={!this.validateForm()}
            onClick={this.handleClick}
          >
            Login
          </button>
        </form>
    );
  }
}

export default Login;
