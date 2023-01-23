import React, { useState, useContext, useEffect } from 'react';
import { DropdownStyles, NotesStyles } from './Styles';
import { FaSort } from 'react-icons/fa';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { Context } from './main';
import Loading from './Loading';
import Note from './Note';
import PostponeSection from './PostponeSection';
import { determineDoc } from './utils/firebaseUtils';
import moment from 'moment';

const Notes = ({ user }) => {
  const { firestore } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState('addition');
  const [selected, setSelected] = useState(null);
  const [postponeOpen, setPostponeOpen] = useState(false);
  const [notes, loading] = useCollectionData(collection(firestore, user.uid));
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    sortNotes();
  }, [notes]);

  const handleClick = type => {
    setSortType(type);
    setIsOpen(false);
    sortNotes();
  };
  const sortNotes = () => {
    let temp = notes?.filter(note => !note.hasOwnProperty('isSpecial'));
    if (sortType == 'addition') {
      temp?.sort((a, b) => moment(b.addition) - moment(a.addition));
    } else {
      temp.sort(a => (a.isDone ? 1 : -1));
    }
    setSorted(temp);
  };
  return (
    <NotesStyles>
      <div className='header'>
        <h2>Notes</h2>
        <div className='sort'>
          <FaSort onClick={() => setIsOpen(!isOpen)} />
          <DropdownStyles className={isOpen ? 'open' : ''}>
            <span
              className='option first'
              onClick={() => handleClick('addittion')}
            >
              Last Added
            </span>
            <span className='option' onClick={() => handleClick('undone')}>
              Undone first
            </span>
          </DropdownStyles>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : sorted ? (
        <>
          {postponeOpen ? (
            <PostponeSection
              setPostponeOpen={setPostponeOpen}
              determineDoc={determineDoc}
              notes={sorted}
              selected={selected}
              firestore={firestore}
              user={user}
            />
          ) : (
            ''
          )}
          {sorted.map(note => (
            <Note
              note={note}
              user={user}
              key={note.id}
              setSelected={setSelected}
              setPostponeOpen={setPostponeOpen}
            />
          ))}
        </>
      ) : (
        <h3>No Tasks to show</h3>
      )}
    </NotesStyles>
  );
};

export default Notes;
