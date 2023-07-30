import React from 'react';

const ListaCarrinho = ({ itens, onRemoverItem }) => {
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
};

export default ListaCarrinho;