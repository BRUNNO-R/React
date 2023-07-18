// imagem.jsx
import React from 'react';
import Card from './Card';

const Imagem = ({ images }) => {
  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-4">
            <Card
              image={image.src}
              alt={image.alt}
              titulo={image.titulo}
              preco={image.preco}
              desc={image.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagem;
