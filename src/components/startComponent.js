import React from 'react';
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import '../App.css';

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    
  render() {
    return (
      <div>
        <Container>
        <Row>
          <Col>
            <h1 className="title">Plant Simulator </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="instructions">The objective of this game is to reach day 10 without killing your plant. Make sure to add water and give sun light to your plant everyday. </h5>
          </Col>
        </Row>
        <Row>
            <Col>  
                <Button variant="success">Success</Button>{' '}
            </Col>

        </Row>
        </Container>
      </div>
    );
  }
  
}

function startComponent() {
  return (
    <div className="StartComponent">
      <div>
        <StartPage />
      </div>
    </div>
  );
}

export default startComponent;

