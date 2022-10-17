
import './App.css';
import {getAuth} from 'firebase/auth'
import app from './Firebase/Firebase.init';

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <form>
        <input type='email' name='email' id='' placeholder='Enter Your Email' />
        <br/>
        <input type='password' name='password' id='' placeholder='Enter Your Password' />
      </form>
    </div>
  );
}

export default App;
