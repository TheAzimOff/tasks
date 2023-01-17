import { useContext, useState } from 'react';
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Notes from './Notes';
import SpecialNote from './SpecialNote';
import { Context } from './main';
import { useAuthState } from 'react-firebase-hooks/auth';
import AddButton from './AddButton';
import AddForm from './AddForm';

function App() {
  const { firestore, auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  return user ? (
    <div className="container">
      <Navbar user={user} />
      <SpecialNote user={user} firestore={firestore} />
      <Notes user={user} firestore={firestore} />
      <AddForm
        isAddTaskOpen={isAddTaskOpen}
        setIsAddTaskOpen={setIsAddTaskOpen}
        user={user}
      />
      <AddButton
        isAddTaskOpen={isAddTaskOpen}
        setIsAddTaskOpen={setIsAddTaskOpen}
      />
    </div>
  ) : (
    <Login loading={loading} />
  );
}

export default App;
