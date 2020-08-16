import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Hook
// can use state on function

const ColorContext = createContext({color: "red"});

function Example(props) {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const colorContext = useContext(ColorContext)

  const [name, setName] = useState("");

  useEffect(() => {
    setName(title + ' ' + count);
  },[title, count]);

  useEffect(() => {
    console.log("useEffect number 2");
    const interval = setInterval(() => {
      console.log('xxXxx');
    }, 2000)
    return () => {
      clearInterval(interval); // do when component is die Hahahahahahah
    }
  },[]);

  return(
    <>
      <h3 style={{color: colorContext.color}}>{name}</h3>
      <h1>This is title: {title}</h1>
      <input value={title} onChange={(event) => setTitle(event.target.value)}/>
      <h2>{count}</h2>
      <button onClick={() => setCount(count+1)}>Click!</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Example /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
