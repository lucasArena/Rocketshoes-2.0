import React from 'react';

import { Container, CartArea } from './styles';

import Logo from '../../assets/images/logo.svg';

const Header: React.FC = () => (
  <Container>
    <img src={Logo} alt="Logo Rocketshoes" />
    <CartArea>
      <strong>Meu carrinho</strong>
      <span>3 itens</span>
    </CartArea>
  </Container>
);

export default Header;
