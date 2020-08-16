import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Quiz 3
// 2 component has hello !
// can add more element
// when passing COMPOSITION or HOC
/**
 * <div>
 * <h1>Hello</h1>
 * <p>Hello</p>
 * <input/>
 * </div> */ 

function HelloGGB() {
  return <><h1>Hello! Geeky Base.</h1></>
}

const makeMoreText = (WrappedComponent) => {
  return class componentLoading extends React.Component {
    render() {
      if (this.props.title) {
        return <>
          <h2>{this.props.title}</h2>
          <WrappedComponent />
        </>
      }
      return <WrappedComponent />
    }
  }
}

const Quiz3 = makeMoreText(HelloGGB)

ReactDOM.render(
  <React.StrictMode>
    <Quiz3 /> 
    <Quiz3 title={`I'm Builder`} /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
