import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: max-content;

  button {
    background: transparent;
    color: #838383;
    border: 1px solid #838383;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background: #838383;
      color: #fff;
    }
  }

  border-radius: 3px;
  border: 1px solid #838383;
  padding: 5px;
`;
