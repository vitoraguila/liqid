import React from 'react';

import PropTypes from 'prop-types';

const QuestionsDropDown = ({
  currentPage,
  currentValue,
  onChangeAnswer,
  answersOptions
}) => (
  <select
    style={{ width: '70%', marginTop: 20, height: 40 }}
    name={currentPage}
    value={currentValue}
    onChange={e => onChangeAnswer(e)}
  >
    {answersOptions.map(e => (
      <option value={e}>{e}</option>
    ))}
  </select>
);

QuestionsDropDown.propTypes = {
  currentPage: PropTypes.number.isRequired,
  currentValue: PropTypes.string.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  answersOptions: PropTypes.instanceOf(Object).isRequired
};

export default QuestionsDropDown;
