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
  InputForm,
  CheckOptions,
  MsgThanks
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

  const currentValue = answer[currentPage] || '';

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
                    <InputForm
                      name={currentPage}
                      value={currentValue}
                      onChange={e => onChangeAnswer(e)}
                      placeholder="Answer here"
                    />
                  )}
                  {e.type === 'dropdown' && (
                    <select
                      name={currentPage}
                      value={currentValue}
                      onChange={e => onChangeAnswer(e)}
                    >
                      {e.answersOptions.map(e => (
                        <option value={e}>{e}</option>
                      ))}
                    </select>
                  )}
                  {e.type === 'radio' && (
                    <CheckOptions onChange={e => onChangeAnswer(e)}>
                      {e.answersOptions.map(e => (
                        <div>
                          <input
                            type="radio"
                            value={e}
                            defaultChecked={currentValue === e}
                            name={currentPage}
                          />
                          <span>{e}</span>
                        </div>
                      ))}
                    </CheckOptions>
                  )}
                </Fragment>
              ))}

          {
            currentPage > questionsTotal &&
              <Fragment>
                <MsgThanks>Thank you for complete survey!</MsgThanks>
                <MsgThanks>Please confirm in the button below.</MsgThanks>
              </Fragment>
          }
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
            color="#999"
          >
            Back
          </Buttons>

          {currentPage > questionsTotal && (
            <Buttons color="#6bc557">Finish</Buttons>
          )}

          {currentPage <= questionsTotal && (
            <Buttons
              disabled={
                answer[currentPage] === undefined ||
                answer[currentPage].length === 0
              }
              onClick={() => saveAnswer(currentPage, answer[currentPage])}
              color="#3b5371"
            >
              Next
            </Buttons>
          )}
        </Container>
      </Footer>
    </Wrapper>
  );
};

export default surveys(Home);
