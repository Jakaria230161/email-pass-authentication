import React from 'react';
import { Link } from 'react-router-dom';

const loginBootstrap = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email;
        const password = form.password;
        console.log(email, password);

    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-white text-center bg-success rounded'>Please Login</h3>
            <form onSubmit={handleSubmit}>
                 <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Email : </label>
  <input type="email" name='email' class="form-control" id="formGroupExampleInput" placeholder="Enter Your Email" required/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Password : </label>
  <input type="password" name = 'password' class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Password" required/>
                </div>
                <button className='btn btn-outline-success rounded' variant="primary" type="submit">
        Login
      </button>
            </form>
            <p><small>New to this website? Please <Link to ='/register'>Register</Link></small></p>
        </div>

    );
};

export default loginBootstrap;