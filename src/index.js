import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// expression : คำสั่ง js ง่ายๆ ใน html
function WithJSX() {
  const message = "Hello, I'm builder"
  return(
  <>
    <h1 alt={'Eiei'}>With JSX Ka.</h1>
    <h2 alt={'expression'}>{ message }</h2>
    <h2 alt={'expression'}>1 + 2 = { 1 + 2 }</h2>
    <ol>
      <li>builder <span style={{color: 'red'}}>(winner)</span></li>
      <li>oatter</li>
    </ol>
  </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <WithJSX />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
