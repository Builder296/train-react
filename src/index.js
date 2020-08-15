import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// condition rendering
class Quiz extends React.Component {

  constructor(props) {
    super(props) // กรุณาส่ง props มาให้ด้วย
    this.state = {
      count: 0,
    };
  }

  isOddOrEven(number) {
    if (number % 2 === 0) {
      return "even"
    }
    return "odd"
  }

  onAdd = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    const { count } = this.state;
    let items = [];
    for (let i = 1 ; i <= count ; i++  ) {
      items.push(<li key={i}> {i} : {this.isOddOrEven(i)} </li>)
    }
    return <>
      <button onClick={this.onAdd}>Add</button>
      <ol>
        { items }
      </ol>
    </>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Quiz />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
