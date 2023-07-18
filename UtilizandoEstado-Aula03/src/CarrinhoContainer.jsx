// CarrinhoContainer.jsx
import React, { Component } from 'react';
import Carrinho from './Carrinho';

class CarrinhoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
    };
  }

  adicionarProdutoAoCarrinho = (produto) => {
    this.setState((prevState) => ({
      produtos: [...prevState.produtos, produto],
    }));
  };

  removerProdutoDoCarrinho = (index) => {
    this.setState((prevState) => {
      const newProdutos = [...prevState.produtos];
      newProdutos.splice(index, 1);
      return { produtos: newProdutos };
    });
  };

  render() {
    const { produtos } = this.state;
    return (
        <Carrinho
          produtos={produtos}
          onAdicionarProduto={this.adicionarProdutoAoCarrinho}
          onRemoverProduto={this.removerProdutoDoCarrinho}
        />
      );
      
    
  }
}

export default CarrinhoContainer;
