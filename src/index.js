import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function CompositionExample(props) {
  return props.children;
}

function Composition() {
  const isEven = (parseInt(Math.random()*10,10) % 2) === 0;
  const element = isEven ? <h2>Hello Even</h2> : <span>Odd</span>
  return <>
   <h1>Hello World</h1>
   <CompositionExample>
      {element}
   </CompositionExample>
   <h3>Hello World H3</h3>
  </>
}

ReactDOM.render(
  <React.StrictMode>
    <Composition/> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
