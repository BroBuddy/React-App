import React, { Component } from 'react';
import TodoView from './TodoView';
import TodoAdd from './TodoAdd';
import { Container, Row, Col } from 'reactstrap';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, title: 'Neuen Job suchen' },
        { id: 2, title: 'Motorrad kaufen' },
        { id: 3, title: 'Freundin finden' }
      ]
    }

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(title) {
    var todos = this.state.todos;
    let maxId = 0;
    for (let todo of todos) {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }

    todos.push({ id: (maxId + 1), title: title });
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="Todo">
        <Container>
          <Row>
            <Col xs="6">
              <TodoView todos={ this.state.todos }></TodoView>
            </Col>
            <Col xs="6">
              <TodoAdd onAdd={ this.addTodo }></TodoAdd>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Todo;
