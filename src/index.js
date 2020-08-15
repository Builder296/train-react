import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Quiz extends React.Component {

  constructor(props) {
    super(props)
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

class Example extends React.Component {

  state = {
    count: 0
  }

  render() {
    const { count } = this.state;
    const number = []
    for (let i = 1 ; i <= count ; i++  ) {
      number.push(<li key={i}> {i % 2 === 0 ? 'even' : 'odd'} </li>)
    }
    return <>
      <button onClick={() => this.setState({count: count+1})}>Add</button>
      <ul>
        {number}
      </ul>
    </>
  }
}

function ItemList(porps) {
  const Items = [];
  for (let i = 0 ; i < porps.numbers.length ; i++  ) {
    Items.push(<li key={i}> {i % 2 === 0 ? 'even' : 'odd'} </li>)
  }
  return<>
    <ul>{Items}</ul>
  </>
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <React.StrictMode>
    <Quiz />
    <Example />
    <ItemList numbers = {numbers}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
