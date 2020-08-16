import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function CompositionExample(props) {
  return <><h2>{props.title}</h2></>
}

function Composition() {
  return <>
   <h1>Hello World</h1>
   <CompositionExample title={'Hello World H2'}>
      Hello World H2
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
