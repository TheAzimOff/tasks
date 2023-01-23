import React, { useState, useContext } from 'react';
import { AddFormStyles } from './Styles';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { TextField } from '@mui/material';
import moment from 'moment';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Context } from './main';
import { v4 as uuidv4 } from 'uuid';

const AddForm = ({ isAddTaskOpen, setIsAddTaskOpen, user, isSpecial, setIsSpecial }) => {
  const { firestore } = useContext(Context);

  const [date, setDate] = useState(moment());
  const [header, setHeader] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setIsAddTaskOpen(false);
    if (isSpecial) {
      await setDoc(doc(firestore, user.uid, 'specialNote'), {
        header,
        body,
        isSpecial: true,
      });
      setIsSpecial(false)
    } else {
      await addDoc(collection(firestore, user.uid), {
        id: uuidv4(),
        body,
        header,
        deadline: date.format(),
        addition: moment().format(),
        isDone: false,
      });
    }
    setHeader('');
    setBody('');
  };

  return (
    <AddFormStyles className={isAddTaskOpen ? 'add-task open' : 'add-task'}>
      <form onSubmit={handleSubmit}>
        <h1>{isSpecial ? 'Special Note' : 'Task'}</h1>
        <h3>Task Heading</h3>
        <input
          className='add-task-heading adding-text'
          placeholder='Enter Task Heading'
          type='text'
          autoComplete='false'
          spellCheck='false'
          value={header}
          onChange={e => setHeader(e.target.value)}
          required
        />
        <h3>Task</h3>
        <textarea
          className='adding-text task'
          type='text'
          placeholder='Enter Task'
          value={body}
          onChange={e => setBody(e.target.value)}
          required
        ></textarea>
        <h3>Deadline</h3>
        <div className='add-task-time-section'>
          <MobileDateTimePicker
            disablePast
            ampm={false}
            renderInput={props => <TextField {...props} />}
            value={date}
            disabled={isSpecial}
            onChange={newValue => {
              setDate(newValue);
            }}
          />
        </div>
        <button className='add-task-button' type='submit'>
          Add
        </button>
      </form>
    </AddFormStyles>
  );
};

export default AddForm;
