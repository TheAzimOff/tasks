import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { LogOutStyles, NavbarStyles } from './Styles';
import { signOutUser } from './utils/GoogleAuth';

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarStyles>
      <div className="user">
        <h2>Welcome, </h2>
        <input
          type="text"
          maxLength={20}
          autoComplete="off"
          spellCheck={false}
          defaultValue="Izzatillo"
        />
      </div>
      <div className="account">
        {user ? (
          <img
            onClick={() => setIsOpen(!isOpen)}
            src={user.photoURL}
            alt="user photo"
          />
        ) : (
          <FaUserCircle onClick={() => setIsOpen(!isOpen)} />
        )}
        <LogOutStyles className={isOpen ? 'open' : ''}>
          <span className="option" onClick={signOutUser}>
            Log Out
          </span>
        </LogOutStyles>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
