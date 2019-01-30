import React, { Component } from 'react';
import Header from './Global/Header/Header';
import Footer from './Global/Footer/Footer';
import Login from './Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App mercado-libre">
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
