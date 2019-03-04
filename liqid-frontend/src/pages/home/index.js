import React, { Fragment } from 'react';
import {
  Wrapper,
  Container,
  Logo,
  Header,
  Footer,
  Middle,
  QuestionsStep,
  Question,
  Buttons,
  InputForm
} from './styles';

import logo from '../../assets/images/logo.png';
import StatusBar from '../../components/statusBar';

// HOC
import { surveys } from '../../hoc/surveys';

const Home = ({
  questions,
  surveys,
  saveAnswer,
  currentPage,
  onChangeAnswer,
  answer,
  goBack
}) => {
  const questionsTotal = questions ? questions.length : 0;
  const surveysTotal = surveys ? Object.keys(surveys).length : 0;

  console.log(questions);
  console.log(surveys);
  console.log(questionsTotal);
  console.log(surveysTotal);
  console.log(currentPage);
  console.log(answer);
  console.log(answer[currentPage - 1]);
  console.log(answer[currentPage]);

  const filterId = surveys
    ? surveys.filter(e => e.id === currentPage).map(e => e.answer)
    : '';

  console.log(filterId[0]);
  return (
    <Wrapper>
      <Header>
        <Container>
          <Logo src={logo} />
        </Container>
      </Header>

      <Middle>
        <Container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <QuestionsStep>{`${currentPage -
            1} of ${questionsTotal}`}</QuestionsStep>
          <StatusBar current={currentPage - 1} total={questionsTotal} />
          {questions &&
            questions
              .filter(e => e.id === currentPage)
              .map(e => (
                <Fragment>
                  <Question>{`Question: ${e.question}`}</Question>
                  <InputForm
                    name={currentPage}
                    value={answer[currentPage] || filterId[0] || ''}
                    onChange={e => onChangeAnswer(e)}
                    placeholder="Answer here"
                  />
                </Fragment>
              ))}
        </Container>
      </Middle>
      <Footer>
        <Container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Buttons onClick={() => goBack()} color="#999">
            Back
          </Buttons>
          <Buttons color="#6bc557">Finish</Buttons>
          <Buttons
            onClick={() => saveAnswer(currentPage, answer[currentPage])}
            color="#3b5371"
          >
            Next
          </Buttons>
        </Container>
      </Footer>
    </Wrapper>
  );
};

export default surveys(Home);
