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
  height: 70px;
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

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: ${props => props.color};
  color: #fff;
  font-weight: bold;
  border-radius: 50px;
  .span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const Question = styled.span`
  margin-top: 30px;
  font-size: 23px;
  font-weight: 500;
  color: #999;
`;
export const InputForm = styled.input`
  margin-top: 20px;
  width: 300px;
  background-color: #fff;
  border: 1pt solid #ccc;
  padding: 10px;
  font-size: 20px;
  height: 50px;
`;
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

export const MsgThanks = styled.span`
  font-size: 16px;
  text-align:center;
  font-weight: bold;
  margin-top: 20px;
`;