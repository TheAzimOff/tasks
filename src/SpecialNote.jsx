import { SpecialNoteStyles } from './Styles';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { deleteDoc, doc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import Loading from './Loading';

const SpecialNote = ({ firestore, user, setIsAddTaskOpen, setIsSpecial }) => {
  const [specialNote, loading] = useDocumentData(
    doc(firestore, user.uid, 'specialNote')
  );
  const handleDelete = async () => {
    await deleteDoc(doc(firestore, user.uid, 'specialNote'));
  };

  return (
    <SpecialNoteStyles>
      {loading ? (
        <Loading />
      ) : (
        <div className='special-note'>
          <h3 className='special-note-header'>
            {specialNote ? specialNote.header : 'Special Note'}
          </h3>
          <p className='special-note-content'>
            {specialNote
              ? specialNote.body
              : 'Add an important note which will be pinned to the top'}
          </p>
          <div className='special-note-buttons'>
            <button
              className='special-note-edit'
              onClick={() => {
                setIsSpecial(true);
                setIsAddTaskOpen(true);
              }}
            >
              <FaEdit />
            </button>
            <button
              className='special-note-delete'
              onClick={async () =>
                await deleteDoc(doc(firestore, user.uid, 'specialNote'))
              }
            >
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      )}
    </SpecialNoteStyles>
  );
};

export default SpecialNote;
