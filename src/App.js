/*=== Dependencies === */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import titleCard from "./components/titleCard"
import NavB from "./components/navbar";
import About from "./components/about";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavB />
      <Row style={{marginBottom:"150px"}}>
      <Image src={process.env.PUBLIC_URL + "/images/cover_image.jpg"} fluid />
      <titleCard />
      </Row>
      

      <Container>
        <Row>
        </Row>
        <Row>
          <About />
        </Row>
      </Container>
    </>
  );
}

export default App;
