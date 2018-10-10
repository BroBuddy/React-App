import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Label, Input, Button } from 'reactstrap';

class WikipediaResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Wikipedia">
                <Container>
                    <Row>
                        <Col xs="6">
                            <Card>
                                <CardHeader>Results from Wikipedia</CardHeader>
                                <CardBody>
                                    { this.props.match.params.search }
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default WikipediaResult;