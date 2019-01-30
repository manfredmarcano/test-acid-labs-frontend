import React, { Component } from 'react';
import imageLogin from '../Global/assets/images/logo-acidlabs-titulo-login.png';
import './Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  validateForm() {
    let emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let passwordValid = this.state.password.length > 4;
    return emailValid && passwordValid;
  }

  handleClick() {
    alert("Login");
  }

  render() {
    return (
        <form className="App-login" onSubmit={this.submitForm}>
          <div className="title-wrapper">
            <img src={imageLogin} className="imageLogin" />
            <h1 className="titleLogin">Login</h1>
          </div>
          
          <input type="email"    name="email"    value={this.state.email}    onChange={this.handleInputChange} placeholder="email"   ></input>
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="password"></input>
        
          <button className="block" disabled={!this.validateForm()} onClick={this.handleClick}>Login</button>
        </form>
    );
  }
}

export default Login;