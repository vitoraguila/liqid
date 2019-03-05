import React from 'react';

import PropTypes from 'prop-types';
import {
  Wrapper,
  Container,
  BoxQuestions,
  Answer,
  Question,
  Title
} from './styles';

const AllAnswers = ({ surveys }) => (
  <Wrapper>
    <Container>
      <Title>All questions and answers</Title>

      {surveys &&
        surveys.map(e => (
          <BoxQuestions>
            <Question>
              <b>Question: </b>
              {e.question}
            </Question>
            <Answer>
              <b>Answer: </b>
              {e.answer}
            </Answer>
          </BoxQuestions>
        ))}
    </Container>
  </Wrapper>
);

AllAnswers.propTypes = {
  surveys: PropTypes.instanceOf(Object).isRequired
};

export default AllAnswers;
