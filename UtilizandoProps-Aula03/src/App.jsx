// app.jsx
import React, { Component } from 'react';
import Menu from './Menu';
import Imagem from './Imagem';
import image1 from './img/imagem1.jpg';
import image2 from './img/imagem2.png';
import image3 from './img/imagem3.jpg';
import image4 from './img/imagem4.jpg';

class App extends Component {
  render() {
    const menuItems = [
      { title: 'Página Inicial', link: '#' },
    ];

    const images = [
      { src: image1, alt: 'Imagem 1', titulo: 'Produto 1', preco: '10.99', desc: 'Adicionar ao Carrinho' },
      { src: image2, alt: 'Imagem 2', titulo: 'Produto 2', preco: '19.99', desc: 'Adicionar ao Carrinho' },
      { src: image3, alt: 'Imagem 3', titulo: 'Produto 3', preco: '15.99', desc: 'Adicionar ao Carrinho' },
      { src: image4, alt: 'Imagem 4', titulo: 'Produto 4', preco: '12.99', desc: 'Adicionar ao Carrinho' },
      { src: image1, alt: 'Imagem 1', titulo: 'Produto 1', preco: '10.99', desc: 'Adicionar ao Carrinho' },
      { src: image2, alt: 'Imagem 2', titulo: 'Produto 2', preco: '19.99', desc: 'Adicionar ao Carrinho' },
    ];

    return (
      <div>
        <Menu menuItems={menuItems} />
        <Imagem images={images} />
      </div>
    );
  }
}

export default App;
