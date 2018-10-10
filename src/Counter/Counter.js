import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Alert } from 'reactstrap';

class Counter extends Component {
  constructor() {
      super();

      this.state = {
          counts: 0,
      };

      this.increaseCounts = this.increaseCounts.bind(this);
      this.decreaseCounts = this.decreaseCounts.bind(this);
  }

  increaseCounts() { 
    this.setState({
        counts: this.state.counts + 1
    });
  }

  decreaseCounts() { 
    this.setState({
        counts: this.state.counts - 1
    });
  }

  render() {
    return (
        <div className="Counter">
            <Container>
                <Row>
                    <Col xs="6">
                        <Card>
                            <CardHeader>Counts: { this.state.counts }</CardHeader>
                            <CardBody>
                                <Button color="danger" size="sm" onClick={ this.decreaseCounts }>
                                    -
                                </Button>
                                &nbsp;
                                <Button color="success" size="sm" onClick={ this.increaseCounts }>
                                    +
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="6">
                        { this.state.counts !== 0 ? (
                                this.state.counts >= 0 ? (
                                <Alert color="success">
                                    The counter included a positive value.
                                </Alert>
                            ) : (
                                <Alert color="danger">
                                    The counter included a negative value.
                                </Alert>
                            )
                        ) : null }
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Counter;
