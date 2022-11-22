import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px 50px;
`;

export const Header = styled.header`
  width: 100%;

  padding: 10px 50px 0;

  input {
    padding: 3px;
    border: 1px solid #c2c2c2;
    border-radius: 3px;

    &:focus-visible {
      outline: 0;
      border: 1px solid #c2c2c2 !important;
    }
    &:focus {
      border: 1px solid #c2c2c2 !important;
    }
  }
`;
