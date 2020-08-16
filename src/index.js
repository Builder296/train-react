import React, { useState, useEffect, createContext, useContext, useReducer, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Hook
// - useCallback
//// return callback fn / memorize obj.
// - useMemo : watching
//// return value / memorize value

const ColorContext = createContext({color: "red"});

// function useCountTitle(count, title) {
//   const [name, setName] = useState("");

//   useEffect(() => {
//     setName(title + ' ' + count);
//   },[count, title]);

//   return name;
// }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;

  }
}

function Example(props) {
  const [count, dispatchCount] = useReducer(reducer, 0); // no specific name
  const [title, setTitle] = useState("");
  const { color } = useContext(ColorContext)

  // const name = useCountTitle(count, title);
  const name = useMemo(() => title + ' ' + count, [title, count]);

  return(
    <>
      <h3 style={{color: color}}>{name}</h3>
      <h1>This is title: {title}</h1>
      <input value={title} onChange={(event) => setTitle(event.target.value)}/>
      <h2>{count}</h2>
      <button onClick={() => dispatchCount({type: "increment"})}>Increment!</button>
      <button onClick={() => dispatchCount({type: "decrement"})}>Decrement!</button>
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
