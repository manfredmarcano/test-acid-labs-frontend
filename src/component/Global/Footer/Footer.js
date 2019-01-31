import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="App-footer">
          <div className="copyright">Copyright © 2006-2018 { this.props.empresa === 'acid-labs' ? 'Acid Labs' : 'Mercadolibre' }</div>
        </footer>
    );
  }
}

export default Footer;
