import React, { Component } from 'react';
import imageLogoAcidLabs from '..//assets/images/logo-acidlabs.png';
import imageLogoMercadoLibre from '../assets/images/logo-mercadolibre.png';
import './Header.css';

class Header extends Component {

  constructor ( props ) {
    super( props );
    this.state = {
      isChecked: true
    };
    this._handleChange = this._handleChange.bind(this);
  }
  
  _handleChange () {
    this.setState( { isChecked: !this.state.isChecked } );
    if (!this.state.isChecked) {
      this.props.updateEmpresa('mercado-libre');
      document.querySelector('.App').classList.remove('acid-labs');
      document.querySelector('.App').classList.add('mercado-libre');
    } else {
      this.props.updateEmpresa('acid-labs');
      document.querySelector('.App').classList.add('acid-labs');
      document.querySelector('.App').classList.remove('mercado-libre'); 
    }
  }

  render() {
    return (
        <header className="App-header">

          <div className="switch-container">
            <label>
              <input ref="switch" checked={ this.state.isChecked } onChange={ this._handleChange } className="switch" type="checkbox" />
              <div>
                <div></div>
              </div>
            </label>
          </div>

          { <img src={!this.state.isChecked ? imageLogoAcidLabs : imageLogoMercadoLibre } className="App-header--logo" /> }

        </header>
    );
  }
}

export default Header;
