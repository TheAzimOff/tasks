import React, { useState } from 'react';
import { FaCheckDouble, FaCheck, FaRegClock } from 'react-icons/fa';
import { ImHourGlass, ImBin2 } from 'react-icons/im';
import { FiAlertTriangle } from 'react-icons/fi';
import moment from 'moment';
import { NoteStyles } from './Styles';

const Note = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);

  const DetIcon = ({ deadline, isDone }) => {
    const isFresh = moment().valueOf() < moment(deadline).valueOf();
    console.log(isDone, isFresh);
    if (isFresh && !isDone) {
      return (
        <div className="note-status active">
          <ImHourGlass />
        </div>
      );
    }
    if (isDone)
      return (
        <div className="note-status done">
          <FaCheck />
        </div>
      );
    return (
      <div className="note-status alert">
        <FiAlertTriangle />
      </div>
    );
  };
  const detDifference = (date) => {
    return moment(date).fromNow();
  };

  return (
    <div className="note-container">
      <NoteStyles
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? 'open' : ''}
      >
        <DetIcon isDone={note.isDone} deadline={note.deadline} />
        <div className="note-body">
          <h4 className="note-header">{note.header}</h4>
          <p className="note-content">{note.body}</p>
        </div>
        <div className="date-deadline">
          <div className="note-date">
            {moment(note.addition).format('MMM D, YYYY hh:mm')}
          </div>
          <div className="note-deadline">
            deadline: {detDifference(note.deadline)}
          </div>
        </div>
      </NoteStyles>
      <div className="context-menu">
        <button className="note-toggler">
          <FaCheckDouble />
        </button>
        <button className="note-delete">
          <ImBin2 />
        </button>
        <button className="note-postpone">
          <FaRegClock />
        </button>
      </div>
    </div>
  );
};

export default Note;
