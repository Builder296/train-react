import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const ColorContext = React.createContext();

class Todo extends React.Component { // class use just one provider // hook cab use more
  static contextType = ColorContext;
  render() {
    return <h3 style={{ color: this.context.color }}> { this.props.title } </h3>
  }
}



function TodoList() {
  return <>
    <Todo title={'todo 1'} ></Todo>
    <Todo title={'todo 2'} ></Todo>
  </>
}

class App extends React.Component {
  state = {
    color: 'red'
  }
  render() {
    return (
      <ColorContext.Provider value={this.state}>
        <TodoList />
      </ColorContext.Provider>
    )
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
