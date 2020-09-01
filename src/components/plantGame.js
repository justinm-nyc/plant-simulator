import React from 'react';
import { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
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
              <svg width="10em" height="10em" viewBox="0 0 18 18" class="bi bi-droplet-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"/>
              </svg>    
              <Row className="justify-content-md-center">
                <Col>Water Plant</Col>
              </Row>
                </Card.Body>
            </Card>
     
            <Card className="sun-card" onClick={this.sunPlant.bind(this)}>     
              <Card.Body>
              <svg width="10em" height="10em" viewBox="0 0 18 18" class="bi bi-sun" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
                <path fill-rule="evenodd" d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
              </svg>   
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

