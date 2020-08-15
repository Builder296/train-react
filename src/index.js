import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// state
class HelloWorldComp extends React.Component {

  constructor(props) {
    super(props) // กรุณาส่ง props มาให้ด้วย
    this.state = {
      message: "My first state",
      count: 0,
      countMore: 2,
    };
  }

  onAdd = () => {
    const { count, countMore } = this.state;
    this.setState({
      count: count + 1,
      countMore: countMore + 2
    }); 
    // Should be call setState 1 time per once work
  }

  render() {
    const {message, count, countMore} = this.state 
    return <>
      <h1> { message } :: { count } : { countMore }</h1>
      <button onClick={this.onAdd}>Add</button>
    </>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <HelloWorldComp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
