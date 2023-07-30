//carrinho.jsx
import React, { Component } from 'react';

class Carrinho extends Component {
  render() {
    const { itens, onRemoverItem } = this.props;

    return (
      <div>
        {itens.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {itens.map((item, index) => (
              <li key={index}>
                {item.titulo} - R$ {item.preco}
                {itens.length > 0 && (
                  <button onClick={() => onRemoverItem(index)}>Remover Item</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Carrinho;
