import React from 'react';
import './signup-login.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignupAndLogin = () => (
    <div className="signup-login">
        <SignIn />
        <SignUp />
    </div>
);

export default SignupAndLogin;
