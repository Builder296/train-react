import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Toggle extends React.Component {

  state = {
    isToggleOn: false
  }

  handleClick() {
    this.setState((p) => ({isToggleOn: !p.isToggleOn}))
  }

  render() {
    const { isToggleOn } = this.state;
    return <>
      <button onClick={this.handleClick.bind(this)}>
        {isToggleOn ? 'On' : 'Off'}
      </button>
    </>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Toggle/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
