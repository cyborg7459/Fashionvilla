import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import {SignupLoginContainer} from './signup-login.styles';

const SignupAndLogin = () => (
    <SignupLoginContainer>
        <SignIn />
        <SignUp />
    </SignupLoginContainer>
);

export default SignupAndLogin;
