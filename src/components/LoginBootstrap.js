import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../Firebase/Firebase.init';

const auth = getAuth(app);


const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
            })
            .catch(error => {
                console.error("error", error);
        })

    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('please enter your email address')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
            alert("Password reset email sent, please check your email")
            })
            .catch(error => {
                console.error("error", error);
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-white text-center bg-success rounded'>Please Login</h3>
            <form onSubmit={handleSubmit}>
                 <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Email : </label>
  <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Enter Your Email" required/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Password : </label>
  <input type="password" name = 'password' className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Password" required/>
                </div>
                <button className='btn btn-outline-success rounded' variant="primary" type="submit">
        Login
      </button>
            </form>
            {success && <p>successfully login to the account.</p>}
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            <p><small>Forget Password?<button type="button" onClick={handleForgetPassword} className="btn btn-link">Reset password</button>Please request to reset password.</small></p>
        </div>

    );
};

export default LoginBootstrap;