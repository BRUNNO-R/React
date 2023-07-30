// CarrinhoContainer.jsx
import React, { Component } from 'react';
import Carrinho from './Carrinho';

class CarrinhoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: [],
    };
  }

  adicionarItemAoCarrinho = (item) => {
    this.setState((prevState) => ({
      itens: [...prevState.itens, item],
    }));
  };

  removerItemDoCarrinho = (index) => {
    this.setState((prevState) => {
      const newItens = [...prevState.itens];
      newItens.splice(index, 1);
      return { itens: newItens };
    });
  };

  render() {
    const { itens } = this.state;
    return (
      <Carrinho
        itens={itens}
        onAdicionarItem={this.adicionarItemAoCarrinho}
        onRemoverItem={this.removerItemDoCarrinho}
      />
    );
  }
}

export default CarrinhoContainer;
