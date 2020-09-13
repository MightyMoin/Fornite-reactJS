import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    var st = {
      width: '100%',
    }
    return (
      <div className="p-5 text-center">
        <div className="container">
          <h3 className="display-4">Welcome !!</h3>
          <img style={st} src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200630004117/fortnite-switch-hero.jpg" alt=""/>
          <p className="mt-5 display-4">A Web Application to view the details of items in Fortnite</p>
          <Link to="/Fornite-reactJS/items">
          <button className="btn btn-secondary">View</button>
          </Link>
        </div>
      </div>
    );
  }
}
