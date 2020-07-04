import React from 'react';
import './sign-in.styles.scss';
import Input from '../input/input.component'
import CustomButton from '../form-button/form-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <Input 
                        handleChange={this.handleChange} 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        label = "Email"
                        required
                    />
                    <Input
                        handleChange={this.handleChange} 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        label="Password"
                        required
                    />
                    <div className="button">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;