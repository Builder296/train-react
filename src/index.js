import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class ItemEvent extends React.Component {

  state = {
    numbers: [1, 2, 3, 4, 5]
  }

  componentDidMount() {
    setTimeout(() => {
      const state = this.state.numbers;
      state.shift();
      this.setState({ numbers: [...state]});
    })
  }

  add = () => {
    this.setState({ numbers: [...this.state.numbers, this.state.numbers[this.state.numbers.length-1] + 1]})
  }

  render() {
    const { numbers } = this.state;
    return <>
      <button onClick={this.add}>Add</button>
      <ItemList numbers = {numbers}/>
    </>
  }
}

function ItemList({numbers}) {
  return<>
    <ul>
      {numbers.map(n => <li key={n}>{n}</li>)}
    </ul>
  </>
}

class NewItemEventQuiz extends React.Component {

  state = {
    listText: [],
    text: ""
  }

  add = () => {
    this.setState({ listText: [...this.state.listText, this.state.text]})
  }

  onChange(event) {
    this.setState({ text: event.target.value});
  }

  render() {
    const { listText } = this.state;
    return <>
      <h5>Quiz Two</h5>
      <input onChange={(event) => this.onChange(event)} />
      <button onClick={this.add}>Add</button>
      <ItemList numbers = {listText}/>
    </>
  }
}

class ExampleTwo extends React.Component {
  state = {
    items: []
  }

  add = (event) => {
    if(event.key === 'Enter') { // directly access to DOM
      const { value } = event.target;
      this.setState((previousState) => (
        {items: [...previousState.items, value]}
      ));
      event.target.value = '';
    }
  }

  render() {
    const { items } = this.state;
    return <>
      <h5>Example Two</h5>
      <input onKeyUp={this.add} />
      <ul>
        {items.map((v) => <li key={v}>{Number.isNaN(v) ? 'Number' : 'No Number'}</li>)}
      </ul>
    </>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ItemEvent />
    <NewItemEventQuiz />
    <ExampleTwo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
