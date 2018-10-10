import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, CardText, Label, Input, Button } from 'reactstrap';

class TodoAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTodo: ''
        }

        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.onTodoChange = this.onTodoChange.bind(this);
    }

    onTodoAdd() {
        this.props.onAdd(this.state.newTodo);
        this.setState({
            newTodo: ''
        });
    }

    onTodoChange(event) {
        this.setState({
            newTodo: event.target.value
        });
    }

    render() {
        let addButton = (this.state.newTodo.length >= 1 ? (
                <Button onClick={ this.onTodoAdd } color="success" size="sm">
                    Add ({this.state.newTodo.length})
                </Button>
            ) : (
                <Button onClick={ this.onTodoAdd } color="danger" size="sm" disabled>
                    Add
                </Button>
            ));

        return (
            <div className="TodoAdd">
                <Card>
                    <CardHeader>Add new todo</CardHeader>
                    <CardBody>
                        <CardText>
                            <Label htmlFor="todo" className="mr-sm-2">Todo</Label>
                            <Input
                                type="text"
                                name="todo"
                                onChange={ this.onTodoChange }
                                value={ this.state.newTodo }
                                placeholder="Add new todo ..."
                            />
                            <br />
                            { addButton }
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

TodoAdd.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default TodoAdd;