import './App.css';
import Button from './UI/Button/Button';
import {useState} from 'react'
import Modal from './components/Modal/Modal';
import {Link} from 'react-router-dom'

function App() {

  let [active, setActive] = useState(false)

  return (
    <div className="App">
      <Link to={'/login'}>
        <Button title='Auth/Reg'
        color={'yellow'}
        onClick={() => setActive(true)}
        />
      </Link>
      <Modal active={active} setActive={setActive}/>
      
    </div>
  );
}

export default App;
