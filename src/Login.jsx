import React from 'react';
import { LoginStyles } from './Styles';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from './utils/GoogleAuth';
import Loading from './Loading';

const Login = ({ loading }) => {
  const handleClick = () => {
    signIn();
  };
  return (
    <LoginStyles>
      <img src="./people-freepik.png" alt="" />
      <div className="login-form">
        <div className="header">
          <h2>Welcome to Tasks!</h2>
          <p>to continue, please sign in</p>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <button onClick={handleClick}>
            <FcGoogle />
            Continue with google
          </button>
        )}
      </div>
    </LoginStyles>
  );
};

export default Login;
