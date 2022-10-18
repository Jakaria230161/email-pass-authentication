import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.init';
import { Link } from 'react-router-dom';


const auth = getAuth(app);


const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);

    const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
      console.log(name, email, password);
       // validate password
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two uppercase');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Please should be at least 6 characters.');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please add at least one special character');
            return
        }
        setPasswordError('');
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setSuccess(true);
          form.reset();
          verifyEmail();
          updateUserName(name)

        })
        .catch(error => {
          console.error("error", error);
          setPasswordError(error.message);
        })
      
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
          alert("Please check your email and verify email address.")
        })
      }
        
  }
  
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName : name
    })
      .then(() => {
      console.log("display name updated")
      })
      .catch(error => {
        console.error("error", error);
    })
  }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-white bg-primary text-center rounded'>Please Register!!!</h2>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your name : </Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Your Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address : </Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password : </Form.Label>
        <Form.Control type="password" name='password' placeholder="Enter Your Password"  required/>
          </Form.Group>
          <p className='text-danger'>{passwordError}</p>
          {success && <p className='text-success'>User created successfully</p>}
      <Button variant="primary" type="submit">
        Register
      </Button>
        </Form>
        <p><small>If already have an account, Please <Link to ='/login'>Login</Link></small></p>
        </div>
    );
};

export default RegisterReactBootstrap;