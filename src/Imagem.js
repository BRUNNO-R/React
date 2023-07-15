import React from 'react';
import Card from './Card';
import image1 from './img/imagem1.jpg';
import image2 from './img/imagem2.png';
import image3 from './img/imagem3.jpg';
import image4 from './img/imagem4.jpg';

const Imagem = () => {
  const images = [
    { src: image1, alt: 'Imagem 1' },
    { src: image2, alt: 'Imagem 2' },
    { src: image3, alt: 'Imagem 3' },
    { src: image4, alt: 'Imagem 4' },
  ];

  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-4">
            <Card image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagem;
