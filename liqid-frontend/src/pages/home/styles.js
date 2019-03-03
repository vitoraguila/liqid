import styled from 'styled-components';

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
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  width: 80%;
`;
export const Header = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const Middle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  background-color: #fff;
  height: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Logo = styled.img`
  width: 109px;
  height: 39px;
`;
export const QuestionsStep = styled.span`
  font-size: 22px;
  color: #999;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Question = styled.span``;
export const BtnNext = styled.button``;
export const BtnBack = styled.button``;
export const BtnFinish = styled.button``;
