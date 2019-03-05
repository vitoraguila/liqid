import styled from 'styled-components';
import colors from '../../utils/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-between;
  width: 100%;
  min-height: 100%;
  border-top: 3pt solid #e6223c;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
export const BoxQuestions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1pt solid ${colors.gray03};
  padding: 20px;
`;

export const Question = styled.span`
  font-size: 20px;
  color: ${colors.gray01};
`;

export const Answer = styled.span`
  font-size: 20px;
  color: ${colors.gray01};
`;

export const Title = styled.span`
  font-size: 25px;
  color: ${colors.gray01};
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;
