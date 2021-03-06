import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || email === '';

    const handleSignIn = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            }).catch((error) => {
                setEmail('');
                setPassword('');
                setError(error.message);
            });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method='POST'>
                        <Form.Input
                            placeholder='Email address'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type='submit'>
                            Sign In
                        </Form.Submit>

                        <Form.Text>
                            New to Netflix? <Form.Link to='signup'>Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.SmallText>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                        </Form.SmallText>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}
