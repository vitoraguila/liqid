import React from 'react';
import { BarBox, Value } from './styles';

const StatusBar = ({ total, current }) => {
  const percent = (100 * current) / total;

  return (
    <BarBox>
      <Value percent={percent} />
    </BarBox>
  );
};

export default StatusBar;
