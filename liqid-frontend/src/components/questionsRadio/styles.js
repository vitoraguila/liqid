import styled from 'styled-components';

export const CheckOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: flex-start;

    input {
      margin-right: 10px;
    }
  }
`;
