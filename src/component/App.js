import React, { Component } from 'react';
import Header from './Global/Header/Header';
import Footer from './Global/Footer/Footer';
import Login from './Login/Login';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Manfred Marcano Aro
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Header />
        <section className="App-content">
          <Login />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
