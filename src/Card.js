import React from 'react';

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image.src} alt={image.alt} style={{ width: '200px', height: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">Produto Teste</h5>
        <p className="card-text">Preço: 00.00</p>
        <a href="#" className="btn btn-primary">Saiba Mais</a>
      </div>
    </div>
  );
};

export default Card;
