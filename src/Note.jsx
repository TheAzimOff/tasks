import React, { useState, useContext } from 'react';
import { FaCheckDouble, FaCheck, FaRegClock } from 'react-icons/fa';
import { ImHourGlass, ImBin2, ImUndo2 } from 'react-icons/im';
import { FiAlertTriangle } from 'react-icons/fi';
import moment from 'moment';
import { NoteStyles } from './Styles';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { Context } from './main';
import { determineDoc } from './utils/firebaseUtils';

const Note = ({ note, user, setSelected, setPostponeOpen }) => {
  const { firestore } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeState = async (id, currentState) => {
    setIsOpen(false);
    const documentName = await determineDoc(id, firestore, user.uid);
    console.log(documentName);
    await updateDoc(doc(firestore, user.uid, documentName), {
      isDone: !currentState,
    });
  };

  const handleDeleteTask = async id => {
    const documentName = await determineDoc(id, firestore, user.uid);
    await deleteDoc(doc(firestore, user.uid, documentName));
  };

  const DetIcon = ({ deadline, isDone }) => {
    const isFresh = moment().valueOf() < moment(deadline).valueOf();
    if (isFresh && !isDone) {
      return (
        <div className='note-status active'>
          <ImHourGlass />
        </div>
      );
    }
    if (isDone)
      return (
        <div className='note-status done'>
          <FaCheck />
        </div>
      );
    return (
      <div className='note-status alert'>
        <FiAlertTriangle />
      </div>
    );
  };
  const detDifference = date => {
    return moment(date).fromNow();
  };

  return (
    <div className='note-container'>
      <NoteStyles
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? 'open' : ''}
      >
        <DetIcon isDone={note.isDone} deadline={note.deadline} />
        <div className='note-body'>
          <h4 className='note-header'>{note.header}</h4>
          <p className='note-content'>{note.body}</p>
        </div>
        <div className='date-deadline'>
          <div className='note-date'>
            {moment(note.addition).format('MMM D, YYYY HH:mm')}
          </div>
          <div className='note-deadline'>
            deadline: {detDifference(note.deadline)}
          </div>
        </div>
      </NoteStyles>
      <div className='context-menu'>
        <button
          className={note.isDone ? 'note-toggler done' : 'note-toggler'}
          onClick={() => handleChangeState(note.id, note.isDone)}
        >
          {note.isDone ? <ImUndo2 /> : <FaCheckDouble />}
        </button>
        <button
          className='note-delete'
          onClick={() => handleDeleteTask(note.id)}
        >
          <ImBin2 />
        </button>
        <button
          className='note-postpone'
          onClick={() => {
            setPostponeOpen(true);
            setSelected(note);
          }}
        >
          <FaRegClock />
        </button>
      </div>
    </div>
  );
};

export default Note;
