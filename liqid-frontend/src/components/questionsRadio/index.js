import React from 'react';
import { CheckOptions } from './styles';
import PropTypes from 'prop-types';

const QuestionsRadio = ({
  currentPage,
  currentValue,
  onChangeAnswer,
  answersOptions
}) => (
  <CheckOptions onChange={e => onChangeAnswer(e)}>
    {answersOptions.map(e => (
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
);

QuestionsRadio.propTypes = {
  currentPage: PropTypes.number.isRequired,
  currentValue: PropTypes.string.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  answersOptions: PropTypes.instanceOf(Object).isRequired
};

export default QuestionsRadio;
