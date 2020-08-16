import React, { useState, useEffect, createContext, useContext, useReducer, useMemo, useCallback} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Hook : Example for Quiz

function Quiz() {
  const [list, setList] = useState([]);

  const handleKey = (event) => {
    const { value } = event.target;
    if (event.key === 'Enter') {
      setList([...list, value]);
    }
  }

  return(
    <>
      <input onKeyUp={handleKey} />
      <ul>
        {list.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </>
  )
}

function Todo() {
  const [todos, setTodos] = useState([]);

  const onKeyUp = (event) => {
    if (event.key === 'Enter') {
      const { value } = event.target;
      setTodos([...todos, value]);
      event.target.value = "";
    }
  }

  return(
    <>
      <input onKeyUp={onKeyUp}/>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Quiz /> 
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
