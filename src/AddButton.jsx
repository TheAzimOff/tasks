import React from 'react';
import { CgMathPlus } from 'react-icons/cg';
import { AddButtonStyles } from './Styles';

const AddButton = ({ isAddTaskOpen, setIsAddTaskOpen }) => {
  return (
    <AddButtonStyles
      className={isAddTaskOpen ? 'add-button open' : 'add-button'}
      onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
    >
      <CgMathPlus />
    </AddButtonStyles>
  );
};

export default AddButton;
