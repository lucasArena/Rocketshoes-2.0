import styled from 'styled-components';

export const Container = styled.menu`
  background: ${(props) => props.theme.colors.background};

  padding-top: 50px;

  display: flex;
  justify-content: space-between;
`;

export const CartArea = styled.aside`
  color: ${(props) => props.theme.colors.text};

  display: flex;
  flex-direction: column;
`;
