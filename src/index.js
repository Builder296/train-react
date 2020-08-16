import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class InputComp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
  }

  onChange = (event) => {
    const name = event.target.value;
    this.setState({name});
  }

  onSubmit = (event) => {
    event.preventDefault();
    alert('Your name is ' + this.state.name);
  }

  render() {
    const { name } = this.state;
    const header = name ? <h1>Hello, {name}.</h1> : null;
    return <form onSubmit={this.onSubmit}>
      {header}
      <input value={name} onChange={this.onChange} />
    </form>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <InputComp name={'props ka'}/> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
