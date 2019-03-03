import styled from 'styled-components';

export const BarBox = styled.div`
  width: 70%;
  border: 1pt solid #ccc;
  height: 21px;
  border-radius: 5px;
`;

export const Value = styled.div`
  width: ${props => props.percent}%;
  height: 20px;
  background-color: #e6223c;
  border-radius: 5px;
`;
