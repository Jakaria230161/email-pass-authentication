
import './App.css';
import {getAuth} from 'firebase/auth'
import app from './Firebase/Firebase.init';

const auth = getAuth(app);

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password);
}

const handleEmailBlur = (event) => {
  console.log(event.target.value);
}

const handlePasswordBlur = (event) => {
  console.log(event.target.value);
}

function App() {
  return (
    <div className="App">
      <form onBlur={handleRegister}>
        <input onChange={handleEmailBlur} type='email' name='email' id='' placeholder='Enter Your Email' required />
        <br/>
        <input onBlur={handlePasswordBlur} type='password' name='password' id='' placeholder='Enter Your Password' required />
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
