import React from 'react';
import { connect } from 'react-redux';
import TodoInput from './TodoInput';


class TodoRedux extends React.Component {

    render() {
        return <>
            <h1>Todos</h1>
            <TodoInput />
            <ul>
                {this.props.todos.map((todo, index) => (
                    <li key={index} >{todo}</li>
                ))}
            </ul>
        </>
    }
}

const mapState = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapState)(TodoRedux);