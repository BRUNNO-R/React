//app.jsx
import React, { Component } from 'react';
import './index.css';
import Menu from './Menu';
import Carrinho from './Carrinho'; 
import Card from './Card';
import image1 from './img/imagem1.jpg';
import image2 from './img/imagem2.png';
import image3 from './img/imagem3.jpg';
import image4 from './img/imagem4.jpg';
import ListaCarrinho from './ListaCarrinho';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { title: 'Página Inicial', link: '#' },
        { title: 'Carrinho', link: '#', isActive: false },
      ],
      itensNoCarrinho: [], 
    };
  }

  toggleCarrinho = () => {
    const { menuItems } = this.state;
    menuItems[1].isActive = !menuItems[1].isActive;
    this.setState({ menuItems });
  };

  adicionarAoCarrinho = (produto) => {
    this.setState((prevState) => ({
      itensNoCarrinho: [...prevState.itensNoCarrinho, produto],
    }));
  };

  onRemoverItem = (index) => {
    this.setState((prevState) => {
      const newItens = [...prevState.itensNoCarrinho];
      newItens.splice(index, 1);
      return { itensNoCarrinho: newItens };
    });
  };

  render() {
    const { menuItems, itensNoCarrinho } = this.state;

    return (
      <div>
        <Menu menuItems={menuItems} onCartClick={this.toggleCarrinho} />
        {menuItems[1].isActive ? (
          <Carrinho
            itens={itensNoCarrinho}
            onRemoverItem={this.onRemoverItem}
          />
        ) : null}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card
                image={image1}
                alt="Imagem 1"
                titulo="Produto 1"
                preco="10.99"
                adicionarAoCarrinho={this.adicionarAoCarrinho}
              />
            </div>
            <div className="col-md-4">
              <Card
                image={image2}
                alt="Imagem 2"
                titulo="Produto 2"
                preco="19.99"
                adicionarAoCarrinho={this.adicionarAoCarrinho}
              />
            </div>
            <div className="col-md-4">
              <Card
                image={image3}
                alt="Imagem 3"
                titulo="Produto 3"
                preco="15.99"
                adicionarAoCarrinho={this.adicionarAoCarrinho}
              />
            </div>
            <div className="col-md-4">
              <Card
                image={image4}
                alt="Imagem 4"
                titulo="Produto 4"
                preco="12.99"
                adicionarAoCarrinho={this.adicionarAoCarrinho}
              />
            </div>
            <div className="col-md-4">
              <Card
                image={image1}
                alt="Imagem 1"
                titulo="Produto 1"
                preco="10.99"
                adicionarAoCarrinho={this.adicionarAoCarrinho}
              />
            </div>
            <div className="col-md-4">
              <Card
                image={image2}
                alt="Imagem 2"
                titulo="Produto 2"
                preco="19.99"
                adicionarAoCarrinho={this.adicionarAoCarrinho}
              />
            </div>
          </div>
        </div>
        <ListaCarrinho itens={itensNoCarrinho} onRemoverItem={this.onRemoverItem} />

      </div>
    );
  }
}

export default App;
