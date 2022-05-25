import './App.css';
import React, {useState} from 'react'



function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  const calculateAdd = () => {
    setTotal(number1 + number2);
  }

  const calculateMul = () => {
    setTotal(number1 * number2);
  }

  const calculateDevide = () => {
    setTotal(number1 / number2);
  }

  const calculateMinus = () => {
    setTotal(number1 - number2);
  }
  return (
    <div className="App">
      <header class="App-header">
        <h1>My Calculator</h1>
        <p>Enter two values over here</p>
        <input 
          type="number" 
          placeholder="0" 
          value={number1} 
          onChange={e => setNumber1(+e.target.value)}
        />
      <div class="equalspaces">
        <input 
          type="number" 
          placeholder="0" 
          value={number2} 
          onChange={e =>  setNumber2(+e.target.value)}
        />
        <div>
          <button onClick={calculateAdd}>+</button>
          <button onClick={calculateMinus}>-</button>
          <button onClick={calculateMul}>*</button>
          <button onClick={calculateDevide}>/</button>
        </div>
        <h1>=</h1>
        </div>
        <h2>{total}</h2>
      </header>
    </div>
  );
}
export default App;
