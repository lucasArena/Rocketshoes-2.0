import styled from 'styled-components';

export const Container = styled.div``;

export const ProductsList = styled.main`
  display: flex;

  padding-top: 50px;
`;

export const Product = styled.div`
  margin: 20px;
  font-family: Roboto;
  padding: 15px;
  background: ${(props) => props.theme.colors.text};
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;

    strong {
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
    }

    span {
      font-size: 21px;
      line-height: 25px;
      margin-top: 10px;
    }

    button {
      background: ${(props) => props.theme.colors.primary};
      font-weight: bold;
      color: ${(props) => props.theme.colors.text};
      padding: 15px;
      border-radius: 4px;
    }
  }
`;
