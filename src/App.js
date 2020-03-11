import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'Printer', price:'$200'},
    {name:'Scanner', price:'$100'},
    {name:'Mouse', price:'$10'},
    {name:'Keyboard', price:'$20'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>Component:</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(item => <Product product={item}></Product>)
          }
        </ul>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  //const handleIncrease = () => setCount(count + 1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Data Effect:{users.length} </h1>
      <ul>
        {
          users.map(user => <li>{user.email} </li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    backgroundColor: 'lightgray',
    border: '1px solid yellow',
    borderRadius: '5px',
    height: 'auto',
    width: '400px',
    padding: '20px',
    margin: '5px',
    float: 'left'
  }
 
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
