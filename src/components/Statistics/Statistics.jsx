import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatisticItem,
  StatisticLabel,
  StatisticValue,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsWrapper>
    <StatisticItem>
      <StatisticLabel>Good:</StatisticLabel>
      <StatisticValue>{good}</StatisticValue>
    </StatisticItem>
    <StatisticItem>
      <StatisticLabel>Neutral:</StatisticLabel>
      <StatisticValue>{neutral}</StatisticValue>
    </StatisticItem>
    <StatisticItem>
      <StatisticLabel>Bad:</StatisticLabel>
      <StatisticValue>{bad}</StatisticValue>
    </StatisticItem>
    <StatisticItem>
      <StatisticLabel>Total Reviews:</StatisticLabel>
      <StatisticValue>{total}</StatisticValue>
    </StatisticItem>
    <StatisticItem>
      <StatisticLabel>Positive Feedback:</StatisticLabel>
      <StatisticValue>{positivePercentage}%</StatisticValue>
    </StatisticItem>
  </StatisticsWrapper>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;