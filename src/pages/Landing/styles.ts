import styled from 'styled-components';

export const Container = styled.div``;

export const ProductsList = styled.main`
  display: flex;
  flex-wrap: 'wrap';

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
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.04);
  }

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
      font-weight: 500;
    }

    button {
      background: ${(props) => props.theme.colors.primary};
      font-weight: bold;
      color: ${(props) => props.theme.colors.text};
      border-radius: 8px;
      margin-top: 20px;

      display: flex;
      align-items: center;
      transition: background 0.4s;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme.colors.primaryDark};
      }

      div {
        border-radius: 8px;
        width: 20%;
        margin: 0;
        padding: 10px;
        background: ${(props) => props.theme.colors.primaryDark};

        span {
          font-weight: 500;
          font-size: 14px;
        }
      }

      strong {
        font-weight: 500;
        flex: 1;
      }
    }
  }
`;
