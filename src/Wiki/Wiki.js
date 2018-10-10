import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router';

class Wikipedia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            redirect: false
        }

        this.onSearch = this.onSearch.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onSearch() {
        this.setState({
            redirect: true
        });
    }

    onChangeSearch(event) {
        this.setState({
            search: event.target.value
        });
    }

    render() {
        let wikiButton = (this.state.search !== '' ? (
                <Button onClick={ this.onSearch } color="success" size="sm">
                    Search
                </Button>
            ) : (
                <Button onClick={ this.onSearch } color="danger" size="sm" disabled>
                    Search
                </Button>
            ));

        return (
            <div className="Wikipedia">
                <Container>
                    <Row>
                        <Col xs="6">
                            <Card>
                                <CardHeader>Searching at Wikipedia</CardHeader>
                                <CardBody>
                                    {( this.state.redirect === true ? (
                                        <Redirect to={ "/wiki-result/" + this.state.search } />
                                    ) : null )}
                                    <Label htmlFor="search" className="mr-sm-2">Search</Label>
                                    <Input
                                        type="text"
                                        name="search"
                                        onChange={ this.onChangeSearch }
                                        value={ this.state.search }
                                        placeholder="Seaching for ..."
                                    />
                                    <br />
                                    { wikiButton }
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Wikipedia;