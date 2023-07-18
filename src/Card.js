//card.js
import React, { Component } from 'react';
class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt={this.props.alt} style={{ width: '200px', height: '200px' }} />
        <div className="card-body">
          <h5 className="card-title">{this.props.titulo}</h5>
          <p className="card-text">Preço: {this.props.preco}</p>
          <a href="#" className="btn btn-primary">{this.props.desc}</a>
        </div>
      </div>
    );
  }
}

export default Card;
