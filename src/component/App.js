import React, { Component } from 'react';
import Header from './Global/Header/Header';
import Footer from './Global/Footer/Footer';
import Login from './Login/Login';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedEmpresa: "mercado-libre"
    };
    this.handleUpdateEmpresa = this.handleUpdateEmpresa.bind(this);
  };

  handleUpdateEmpresa (value) {    
    this.setState({
      selectedEmpresa: value
    });
  };

  render() {
    return (
      <div className="App mercado-libre">
        <Header updateEmpresa={this.handleUpdateEmpresa}/>
        <section className="App-content">
          <Login empresa={this.state.selectedEmpresa}/>
        </section>
        <Footer empresa={this.state.selectedEmpresa}/>
      </div>
    );
  }
}

export default App;
