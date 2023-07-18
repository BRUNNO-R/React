// Carrinho.jsx
import React, { Component } from 'react';

class Carrinho extends Component {
  render() {
    const { produtos, onRemoverProduto } = this.props;

    return (
      <div>
        {produtos.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {produtos.map((produto, index) => (
              <li key={index}>
                {produto.titulo} - R$ {produto.preco}
                <button onClick={() => onRemoverProduto(index)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Carrinho;
