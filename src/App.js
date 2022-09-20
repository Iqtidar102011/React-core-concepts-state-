import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  // useState will giva an array of two element ,initial value and a function
  // console.log(abc)


  // event handler function to increase count
  const increaseCount = () => setCount(count + 1);

  // const newCount = count + 1;
  // setCount(newCount)



  const decreaseCount = () => setCount(count - 1)



  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>

    </div>
  )
}

export default App;
