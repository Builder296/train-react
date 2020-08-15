import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// condition rendering
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
    const { countMore } = this.state;
    this.setState((prevState) => ({
      count: prevState.count + 1,
      countMore: countMore + 2
    }));
  }

  render() {
    if(this.state.count % 3 === 2) {
      return <h2>This is a book.</h2>
    }
    const {message, count, countMore} = this.state 
    return <>
      <h1> { message } :: { count } : { countMore }</h1>
      <button onClick={this.onAdd}>Add</button>
    </>
  }
}

function Car(props) {
  const isHonda = props.isHonda;
  if (isHonda) {
    return <h1>Honda!!</h1>
  }
  return <h1>No Honda.</h1>
}

ReactDOM.render(
  <React.StrictMode>
    {/* <HelloWorldComp /> */}
    <Car isHonda={true} />
    <Car isHonda={false} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
