import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Alert } from 'reactstrap';

class BmiResult extends Component {
    render() {
        return (
            <div className="BmiResult">
                { this.props.bmi ? (
                    <Card>
                        <CardHeader>Result</CardHeader>
                        <CardBody>
                        { this.props.bmi < 18.5 ? (
                                <Alert color="warning">
                                    Weight Status: Underweight<br /><br />
                                    BMI: { this.props.bmi }
                                </Alert>
                            ) : (this.props.bmi < 25 ? (
                                <Alert color="success">
                                    Weight Status: Normal<br /><br />
                                    BMI: { this.props.bmi }
                                </Alert>
                            ) : (
                                <Alert color="danger">
                                    Weight Status: Overweight<br /><br />
                                    BMI: { this.props.bmi }
                                </Alert>
                            )
                        ) }
                        </CardBody>
                    </Card>
                ) : null }
            </div>
        )
    }
}

export default BmiResult;