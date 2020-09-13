import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { item , id } = this.props;
    const st = {
        color : 'teal'
    }
    return (
      <div className="col-sm-4">
        <div className="card m-3" >
        <img  src={item.images.icon} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5> 
            <Link to={`/Fornite-reactJS/items/${id}`} style={st}><button className="btn-secondary btn">Details</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
