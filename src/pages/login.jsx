import React from 'react';
import {loginUserAsync} from '../redux/auth/auth.actions';
import {connect} from 'react-redux';

function Login({loginUser}) {
  const onSubmitWithGoogle = async (e) => {
    e.preventDefault();

    loginUser('google');
  };

  const onSubmitWithFacebook = async (e) => {
    e.preventDefault();

    loginUser('facebook');
  };
  return (
    <div className='content'>
      <form>
        <button type='submit' onClick={onSubmitWithGoogle}>
          Login with google
        </button>
        <button type='submit' onClick={onSubmitWithFacebook}>
          Login with facebook
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (plartform) => dispatch(loginUserAsync(plartform)),
});

export default connect(null, mapDispatchToProps)(Login);
