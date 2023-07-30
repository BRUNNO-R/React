//card.js
import React from 'react';

const Card = ({ image, alt, titulo, preco, adicionarAoCarrinho }) => {
  const handleAdicionarAoCarrinho = () => {
    const produto = { image, alt, titulo, preco };
    adicionarAoCarrinho(produto); 
  };

  return (
    <div className="card">
      <img src={image} alt={alt} style={{ width: '200px', height: '200px' }} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">Preço: {preco}</p>
        <button className="btn btn-primary" onClick={handleAdicionarAoCarrinho}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;
