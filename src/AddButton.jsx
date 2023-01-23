import React from 'react';
import { CgMathPlus } from 'react-icons/cg';
import { AddButtonStyles } from './Styles';

const AddButton = ({
  isAddTaskOpen,
  setIsAddTaskOpen,
  setIsSpecial,
  isSpecial,
}) => {
  return (
    <AddButtonStyles
      className={isAddTaskOpen ? 'add-button open' : 'add-button'}
      onClick={() => {
        if (isSpecial && isAddTaskOpen) setIsSpecial(false);
        setIsAddTaskOpen(!isAddTaskOpen);
      }}
    >
      <CgMathPlus />
    </AddButtonStyles>
  );
};

export default AddButton;
