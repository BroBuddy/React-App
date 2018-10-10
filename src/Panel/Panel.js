import React, { Component } from 'react';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

class Panel extends Component {

  constructor() {
      super();

      this.state = {
          status: "Offline"
      };

      this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus() { 
    if(this.state.status === "Offline") {
        this.setState({
            status: "Online"
        });
    } else {
        this.setState({
            status: "Offline"
        });
    }
  }

  render() {
    return (
      <div className="Panel">
        <Card inverse color="dark">
            <CardBody>
                <CardTitle>
                    { this.props.title }
                    &nbsp;
                    {(this.state.status === "Online"
                        ? <Badge color="success">{ this.state.status }</Badge>    
                        : <Badge color="danger">{ this.state.status }</Badge>
                    )}
                    
                </CardTitle>

                <CardText>
                    <p>
                        { this.props.content }
                    </p>

                    <p className="Panel-comment">
                        ~ { this.props.children }
                    </p>
                </CardText>

                {(this.state.status === "Online"
                    ? <Button outline color="danger" size="sm" onClick={ this.changeStatus }>Go Offline</Button>    
                    : <Button outline color="success" size="sm" onClick={ this.changeStatus }>Go Online</Button>
                )}
            </CardBody>
        </Card>
      </div>
    );
  }
}

export default Panel;
