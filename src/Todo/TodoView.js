import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem, Badge } from 'reactstrap';

class TodoView extends Component {
    render() {
        return (
            <div className="TodoView">
                <Card>
                    <CardHeader>Todo list</CardHeader>
                    <CardBody>
                        <ListGroup>
                            { this.props.todos.map(function(todo) {
                                return (
                                    <ListGroupItem className="justify-content-between" key={todo.id}>
                                        { todo.title } <Badge pill>{ todo.title.length }</Badge>
                                    </ListGroupItem>
                                )
                            }) }
                        </ListGroup>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

TodoView.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
}

export default TodoView;