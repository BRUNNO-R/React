// card.jsx
import React from 'react';

const Card = ({ image, alt, titulo, preco, desc }) => {
  return (
    <div className="card">
      <img src={image} alt={alt} style={{ width: '200px', height: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">Preço: {preco}</p>
        <a href="#" className="btn btn-primary">
          {desc}
        </a>
      </div>
    </div>
  );
};

export default Card;
