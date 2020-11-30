import React from 'react';

import { Container } from './styles';

import Header from '../../../components/Header';

const Default: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Default;
