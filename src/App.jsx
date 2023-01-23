import { useContext, useState } from 'react';
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Notes from './Notes';
import SpecialNote from './SpecialNote';
import { Context } from './main';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import AddButton from './AddButton';
import AddForm from './AddForm';

function App() {
  const { firestore, auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  return user ? (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className='container'>
        <Navbar user={user} />
        <SpecialNote
          user={user}
          firestore={firestore}
          setIsSpecial={setIsSpecial}
          setIsAddTaskOpen={setIsAddTaskOpen}
        />
        <Notes user={user} firestore={firestore} />
        <AddForm
          isAddTaskOpen={isAddTaskOpen}
          setIsAddTaskOpen={setIsAddTaskOpen}
          user={user}
          isSpecial={isSpecial}
          setIsSpecial={setIsSpecial}
        />
        <AddButton
          isAddTaskOpen={isAddTaskOpen}
          setIsAddTaskOpen={setIsAddTaskOpen}
          setIsSpecial={setIsSpecial}
          isSpecial={isSpecial}
        />
      </div>
    </LocalizationProvider>
  ) : (
    <Login loading={loading} />
  );
}

export default App;
