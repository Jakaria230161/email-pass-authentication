import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const RegisterReactBootstrap = () => {

    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        
        
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-white bg-primary text-center rounded'>Please Register!!!</h2>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address : </Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter Your Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password : </Form.Label>
        <Form.Control type="password" name='password' placeholder="Enter Your Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
        </div>
    );
};

export default RegisterReactBootstrap;