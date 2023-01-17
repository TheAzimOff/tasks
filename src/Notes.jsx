import React, { useState, useContext } from 'react';
import { DropdownStyles, NotesStyles } from './Styles';
import { FaSort } from 'react-icons/fa';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { Context } from './main';
import Loading from './Loading';
import Note from './Note';

const Notes = ({ user }) => {
  const { firestore } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState('addition');
  const [notes, loading] = useCollectionData(collection(firestore, user.uid));
  const handleClick = (type) => {
    setSortType(type);
    setIsOpen(false);
  };
  console.log(notes);
  return (
    <NotesStyles>
      <div className="header">
        <h2>Notes</h2>
        <div className="sort">
          <FaSort onClick={() => setIsOpen(!isOpen)} />
          <DropdownStyles className={isOpen ? 'open' : ''}>
            <span
              className="option first"
              onClick={() => handleClick('addittion')}
            >
              Last Added
            </span>
            <span className="option" onClick={() => handleClick('deadline')}>
              Near Deadline
            </span>
          </DropdownStyles>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : notes ? (
        notes.map((note) => <Note note={note} key={note.id} />)
      ) : (
        <h3>No Tasks to show</h3>
      )}
    </NotesStyles>
  );
};

export default Notes;
