import './App.css';
import { useState } from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Navbar logoText="Abdul Rahman Azam" />

      <h1>Abdul Rahman Azam is a crypto trader.</h1>
      <div className='value'> {value} </div>

      <button onClick={()=>{setValue(value+1)}}> Click me </button>
      <Footer/>
    </div>  
  );
}

export default App;
