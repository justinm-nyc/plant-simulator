import React from 'react';
import { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import WaterDroplet from '../images/waterDroplet.svg';
import SunLight from '../images/sunIcon.svg';
import '../App.css';

class PlantSimulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(), 
      waterLevel: 3,
      sunLevel: 3,
      dayCount: 1,
      seconds: 10
    };
  }

  componentDidMount() {
    this.dayInterval = setInterval(() => {
        const { waterLevel, sunLevel, dayCount, seconds } = this.state

        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1
          }))
        } 

        if (seconds === 0){
          this.setState(({ dayCount }) => ({
            seconds: 10,
            dayCount: dayCount + 1
          }))

          this.underWaterPlant()
          this.underSunPlant()
        }

        if (waterLevel === 0) {
          alert("Your plant died because it needed more water.")
          clearInterval(this.dayInterval)
        }
  
        
        if (sunLevel === 0) {
          alert("Your plant died because it needed more sunlight.")
          clearInterval(this.dayInterval)
        }

        if (waterLevel > 6) {
          alert("Your plant died because it recieved too water.")
          clearInterval(this.dayInterval)
        }
  
        
        if (sunLevel > 7) {
          alert("Your plant died because it recieved too much sunlight.")
          clearInterval(this.dayInterval)
        }

        if (dayCount === 10) {
          alert("You WON!")
          clearInterval(this.dayInterval)
        }

      }, 1000);
     
  }

  componentWillUnmount() {
    clearInterval(this.dayInterval);
  }
  
  waterPlant() {
    this.setState(prevState => {
      return {waterLevel: prevState.waterLevel + 1}
    });
  }

  underWaterPlant() {
    this.setState(prevState => {
      return {waterLevel: prevState.waterLevel - 1}
    });
  }

  sunPlant() {
    this.setState(prevState => {
      return {sunLevel: prevState.sunLevel + 1}
    });
  }

  underSunPlant() {
    this.setState(prevState => {
      return {sunLevel: prevState.sunLevel - 1}
    });
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
            <Card className="water-card" onClick={this.waterPlant.bind(this)}>     
              <Card.Body>
                <img src={WaterDroplet} alt="Water Droplet"/>
              <Row className="justify-content-md-center">
                <Col>Water Plant</Col>
              </Row>
                </Card.Body>
            </Card>
     
            <Card className="sun-card" onClick={this.sunPlant.bind(this)}>     
              <Card.Body>
                <img src={SunLight} alt="Sun Icon"/> 
              <Row className="justify-content-md-center">
                <Col>Give Sunshine</Col>
              </Row>
              </Card.Body>
            </Card>
        
            </Col>
            <Col>
                <h2>{this.state.seconds}</h2>
                <h2>Day Number:</h2>
                <h3>{this.state.dayCount}</h3>
                <div className="progress-bar-div">
                  <h2>Plant Growth Progress:</h2>
                  <ProgressBar variant="success" now={this.state.dayCount * 10} />
                </div>
            </Col>
          </Row>
          </Container>
      </div>
    );
  }
  
}

function PlantGame() {
  return (
    <div className="PlantGame">
      <div>
        <PlantSimulator />
      </div>
    </div>
  );
}

export default PlantGame;

