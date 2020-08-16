import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const ColorContext = React.createContext({});
const FontSizeContent = React.createContext({});

/**
 * Error Bounderies
  - handle error
  - send error to service
  */

class Todo extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {({color}) => (
          <FontSizeContent.Consumer>
            {({fontSize}) => (
              <h3 style={{ color , fontSize: fontSize + 'px' }}> { this.props.title } </h3>
            )}
          </FontSizeContent.Consumer>
        )}
      </ColorContext.Consumer>
    )
  }
}


function TodoList() {
  return <>
    <Todo title={'todo 1'} ></Todo>
    <Todo title={'todo 2'} ></Todo>
  </>
}

class App2 extends React.Component {
  state = {
    color: 'red',
    fontSize: 17,
    toggleColor: () => {
      this.setState(() => ({ color: 'pink'}))
    }
  }
  render() {
    const { color, fontSize, toggleColor } = this.state;
    return (
      <ColorContext.Provider value={{ color, toggleColor }}>
        <FontSizeContent.Provider value={{ fontSize }}>
          <TodoList />
        </FontSizeContent.Provider>
      </ColorContext.Provider>
    )
  }
}

class ErrorBounderies extends React.Component {
  state = {
    isError: false
  }

  static getDerivedStateFromError(error) {

  }

  render() {
    return <>
      {this.state.isError ? <span>Something when weong.</span> : <span>Goooood.</span>}
    </>
  }
}
class App extends React.Component {
  render() {
    return <>
      <ErrorBounderies>
        <App2 />
      </ErrorBounderies>
    </>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
