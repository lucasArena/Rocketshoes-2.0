import React from 'react';

import { Container, ProductsList, Product } from './styles';

import image from '../../assets/tenis.jpg';

const Landing: React.FC = () => (
  <Container>
    <ProductsList>
      <Product>
        <img src={image} alt="Teste" />
        <section>
          <strong>Tênis de caminhada</strong>
          <span>R$ 179,99</span>
          <button type="button">Adicionar ao carrinho</button>
        </section>
      </Product>

      <Product>
        <img src={image} alt="Teste" />
        <section>
          <strong>Tênis de caminhada</strong>
          <span>R$ 179,99</span>
          <button type="button">Adicionar ao carrinho</button>
        </section>
      </Product>

      <Product>
        <img src={image} alt="Teste" />
        <section>
          <strong>Tênis de caminhada</strong>
          <span>R$ 179,99</span>
          <button type="button">Adicionar ao carrinho</button>
        </section>
      </Product>
    </ProductsList>
  </Container>
);

export default Landing;
