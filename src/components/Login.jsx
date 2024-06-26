import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../fb-cfg.js';
import ReCAPTCHA from 'react-google-recaptcha';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Successfully logged in with email and password');
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log('Successfully logged in with Google');
        } catch (error) {
            console.log(error.message);
        }
    };

    const onCaptchaChange = (token) => {
        setCaptchaVerified(true);
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

           <ReCAPTCHA
                sitekey="6LeYFaYpAAAAAOPHZeTWJq2XRBRPZftDlhT8F6Vv"
                onChange={onCaptchaChange}
            />
            <button
                onClick={handleLogin}
                disabled={!captchaVerified}
            >
                Login with Email
            </button>
            <button
                onClick={handleGoogleLogin}
                disabled={!captchaVerified}
            >
                Login with Google
            </button>
        </div>
    );
}

export default Login;