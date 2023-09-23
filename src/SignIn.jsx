import { TextField, Button } from "@mui/material";
import { GoogleLogin } from 'react-google-login';
import PropTypes from 'prop-types';
// import styled from '@emotion/styled';


function SignIn({ onSuccess, onFailure, clientId }) {
    
  return (
    <div className="sign-in">
      <section className="signin-right-side" />
      <img className="signin-left-side-icon" alt="" src="Dashboard\src\assets\left-side.svg" />
      <h1 className="signin-board">Board.</h1>
      <form className="signin-login-form">
      <div className="signin-card">
              <div className="signin-card1" />
            </div>
            <div className="signin-input-field">
              <TextField
                className="signin-input-field1"
                color="primary"
                label="required"
                size="medium"
                placeholder="johndoe@gmail.com"
                required={true}
                sx={{ width: 356.77020263671875 }}
                variant="filled"
                type="text"
              />
            </div>
            <TextField 
              className="signin-input"
              color="primary"
              size="medium"
              placeholder=""
              sx={{ width: 356.77020263671875 }}
              variant="filled"
              type="password"
            />
            
            <div className="signin-login-form-child" />
            <Button
              className="signin-button-sign-in"
              sx={{ width: 356.77020263671875 }}
              color="primary"
              size="medium"
              variant="contained"
            >
              Sign In
            </Button>
            <div className="signin-email-address">Email address</div>
            <div className="signin-johndoegmailcom"></div>
            <div className="signin-password">Password</div>
            <div className="signin-forgot-password">Forgot password?</div>
            <div className="signin-dont-have-an-container">
              <span className="signin-dont-have-an">{`Don’t have an account? `}</span>
              <span className="signin-register-here">Register here</span>
            </div>
      </form>

      <GoogleLogin
        className="signin-google-sign-in"
        variant="contained"
        color="primary"
        size="medium"
        sx={{ width: 197.59580993652344 }}
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="Sign in with Google"
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />

      <h1 className="signin-sign-in1">Sign In</h1>
      <div className="signin-sign-in-to">Sign in to your account</div>
      <h3 className="signin-logo">LOGO</h3>
      <div className="signin-vector-parent">
        <img className="signin-vector-icon" alt="" src="\assets\vector.svg" />
        <img className="signin-vector-icon1" alt="" src="assets/vector1.svg" />
        <a className="signin-carbonlogo-linkedin">
          <img className="signin-vector-icon2" alt="" src="assets/vector2.svg" />
        </a>
        <a className="signin-carbonlogo-discord">
          <img className="signin-vector-icon3" alt="" src="assets/vector3.svg" />
          <img className="signin-vector-icon4" alt="" src="assets/vector4.svg" />
        </a>
      </div>
    </div>
  );
}

SignIn.propTypes = {
    onSuccess: PropTypes.func.isRequired, // You can adjust the prop type as needed
    onFailure: PropTypes.func.isRequired,
    clientId: PropTypes.string.isRequired,
  };

export default SignIn;
