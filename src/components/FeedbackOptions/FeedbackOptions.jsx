import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackOptionsWrapper,
  FeedbackButton,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onLeaveFeedback(option);
  };

  return (
    <FeedbackOptionsWrapper>
      {options.map((option) => (
        <FeedbackButton
          key={option}
          onClick={() => handleOptionClick(option)}
          selected={selectedOption === option}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackOptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;


