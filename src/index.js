import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// function vs class
// props

function HelloWorld({builder}) {
  const message = `Hello, I'm ${builder} in function`
  return(
  <>
    <h1>{ message }</h1>
  </>
  )
}

class HelloWorldComp extends React.Component {
  render() {
    return <>
      <h1> My Class Component </h1>
      <h2> { this.props.message } </h2>
    </>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld builder="builder" />
    <HelloWorldComp message="ทดสอบ props" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
