import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, Setusers] = useState([])
  // useEffect(()=>{},[])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => Setusers(data))
  }, [])
  return (
    <div>
      <h1>Total Users:{users.length}</h1>
      {/* usimg map to create component(User) and show data  */}
      {
        users.map(user => <User key={user.id} name={user.name} mail={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid black' }}>
      <h3>Name:{props.name}</h3>
      <p>Email: {props.mail}</p>
    </div>
  )
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
