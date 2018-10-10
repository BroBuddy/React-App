import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, Input, Button } from 'reactstrap';

class BmiView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: '',
            weight: ''
        }

        this.onCalculate = this.onCalculate.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
    }

    onCalculate() {
        this.props.updateBMI(this.state.height, this.state.weight);
    }

    onChangeHeight(event) {
        this.setState({
            height: event.target.value
        });
    }

    onChangeWeight(event) {
        this.setState({
            weight: event.target.value
        });
    }

    render() {
        let calculateButton = (this.state.height !== '' && this.state.weight !== '' ? (
                <Button onClick={ this.onCalculate } color="success" size="sm">
                    Calculate
                </Button>
            ) : (
                <Button onClick={ this.onCalculate } color="danger" size="sm" disabled>
                    Calculate
                </Button>
            ));

        return (
            <div>
                <Card>
                    <CardHeader>Body Mass Index</CardHeader>
                    <CardBody>
                        <Label htmlFor="height" className="mr-sm-2">Height in cm</Label>
                        <Input
                            type="number"
                            min="150"
                            max="200"
                            name="height"
                            onChange={ this.onChangeHeight }
                            value={ this.state.height }
                        />
                        <br />
                        <Label htmlFor="weight" className="mr-sm-2">Weight in kg</Label>
                        <Input
                            type="number"
                            min="50"
                            max="150"
                            name="weight"
                            onChange={ this.onChangeWeight }
                            value={ this.state.weight }
                        />
                        <br />
                        { calculateButton }
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default BmiView;