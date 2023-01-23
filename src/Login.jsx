import React from 'react';
import { LoginStyles } from './Styles';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from './utils/firebaseUtils';
import Loading from './Loading';

const Login = ({ loading }) => {
  return (
    <LoginStyles>
      <img src='./people-freepik.png' alt='' />
      <div className='login-form'>
        <div className='header'>
          <h2>Welcome to Tasks!</h2>
          <p>to continue, please sign in</p>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <button onClick={() => signIn()}>
            <FcGoogle />
            Continue with google
          </button>
        )}
      </div>
    </LoginStyles>
  );
};

export default Login;
