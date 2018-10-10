import React, { Component } from 'react';
import BmiView from './BmiView';
import BmiResult from './BmiResult';
import { Container, Row, Col } from 'reactstrap';

class Bmi extends Component {
  constructor(props) {
    super(props);

    this.state = {
        bmi: ''
    }

    this.updateBMI = this.updateBMI.bind(this);
  }

  updateBMI(height, weight) {
    let bmi = weight / (height * height) * 10000;

    this.setState({
      bmi: Math.floor(bmi * 10) / 10
    });
  }

  render() {
    return (
      <div className="Bmi">
        <Container>
          <Row>
            <Col xs="6">
                <BmiView updateBMI={ this.updateBMI }></BmiView>
            </Col>
            <Col xs="6">
                <BmiResult bmi={this.state.bmi}></BmiResult>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Bmi;
