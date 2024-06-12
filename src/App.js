
import React, { useState } from'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const handleIncremnet = () => setCount(count + 1);
  const handleDecremnet = () =>{
    if(count>0){
      setCount(count - 1);
    }else{
      alert("Count can't be less than 0")
    }
  }
  return (
    <div className="App">
      <p className='text-danger fs-5 fw-bold'>{`Counter:- ${count}`}</p>
      <button className='btn btn-primary fs-5 fw-bold' onClick={handleIncremnet}>Incremnet</button>
      <button className='btn btn-warning mx-2 fs-5 fw-bold' onClick={handleDecremnet}>Decremnet</button>
    </div>
  );
}

export default App;
