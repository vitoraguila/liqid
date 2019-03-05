import React from 'react';
import { InputForm } from './styles';

import PropTypes from 'prop-types';

const QuestionsInput = ({ currentPage, currentValue, onChangeAnswer }) => (
  <InputForm
    name={currentPage}
    value={currentValue}
    onChange={e => onChangeAnswer(e)}
    placeholder="Answer here"
  />
);

QuestionsInput.propTypes = {
  currentPage: PropTypes.number.isRequired,
  currentValue: PropTypes.string.isRequired,
  onChangeAnswer: PropTypes.func.isRequired
};

export default QuestionsInput;
