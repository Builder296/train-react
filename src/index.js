import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Todo({ color, title }) {
  return <h3 style={{ color}}>{title}</h3>
}

function TodoList({color}) {
  return <>
    <Todo title={'todo 1'} color={color}></Todo>
    <Todo title={'todo 2'} color={color}></Todo>
  </>
}

class App extends React.Component {
  render() {
    return <TodoList color={'red'} />
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App/> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
