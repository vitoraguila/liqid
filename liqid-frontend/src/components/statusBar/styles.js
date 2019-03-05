import styled from 'styled-components';
import colors from '../../utils/colors';

export const BarBox = styled.div`
  width: 70%;
  border: 1pt solid ${colors.gray03};
  height: 21px;
  border-radius: 5px;
`;

export const Value = styled.div`
  width: ${props => props.percent}%;
  height: 20px;
  background-color: ${colors.red};
  border-radius: 5px;
`;
