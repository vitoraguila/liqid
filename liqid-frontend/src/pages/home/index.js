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
  MsgThanks
} from './styles';

import logo from '../../assets/images/logo.png';
import colors from '../../utils/colors';
import PropTypes from 'prop-types';

// HOC
import { surveys } from '../../hoc/surveys';

// COMPONENTS
import StatusBar from '../../components/statusBar';
import QuestionsInput from '../../components/questionsInput';
import QuestionsDropDown from '../../components/questionsDropDown';
import QuestionsRadio from '../../components/questionsRadio';
import AllAnswers from '../../components/allAnswers';

const Home = ({
  questions,
  saveAnswer,
  currentPage,
  onChangeAnswer,
  answer,
  goBack,
  showAllAnswers,
  showAnswers,
  surveys
}) => {
  const questionsTotal = questions ? questions.length : 0;
  const currentValue = answer[currentPage] || '';

  if (showAnswers) {
    return <AllAnswers surveys={surveys} />;
  }

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
                  {e.type === 'input' && (
                    <QuestionsInput
                      currentPage={currentPage}
                      currentValue={currentValue}
                      onChangeAnswer={e => onChangeAnswer(e)}
                    />
                  )}
                  {e.type === 'dropdown' && (
                    <QuestionsDropDown
                      currentPage={currentPage}
                      currentValue={currentValue}
                      onChangeAnswer={e => onChangeAnswer(e)}
                      answersOptions={e.answersOptions}
                    />
                  )}
                  {e.type === 'radio' && (
                    <QuestionsRadio
                      currentPage={currentPage}
                      currentValue={currentValue}
                      onChangeAnswer={e => onChangeAnswer(e)}
                      answersOptions={e.answersOptions}
                    />
                  )}
                </Fragment>
              ))}

          {currentPage > questionsTotal && (
            <Fragment>
              <MsgThanks>Thank you for complete survey!</MsgThanks>
              <MsgThanks>Please confirm in the button below.</MsgThanks>
            </Fragment>
          )}
        </Container>
      </Middle>
      <Footer>
        <Container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Buttons
            disabled={currentPage === 1}
            onClick={() => goBack()}
            color={colors.gray01}
          >
            Back
          </Buttons>

          {currentPage > questionsTotal && (
            <Buttons onClick={() => showAllAnswers()} color={colors.green}>
              Finish
            </Buttons>
          )}

          {currentPage <= questionsTotal && (
            <Buttons
              disabled={
                answer[currentPage] === undefined ||
                answer[currentPage].length === 0
              }
              onClick={() => saveAnswer(currentPage, answer[currentPage])}
              color={colors.blue}
            >
              Next
            </Buttons>
          )}
        </Container>
      </Footer>
    </Wrapper>
  );
};

QuestionsDropDown.propTypes = {
  questions: PropTypes.instanceOf(Object).isRequired,
  saveAnswer: PropTypes.instanceOf(Object).isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  showAllAnswers: PropTypes.func.isRequired,
  showAnswers: PropTypes.bool.isRequired
};

export default surveys(Home);
