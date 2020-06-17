/*=== Dependencies === */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import TitleCard from "./components/TitleCard";
import Projects from "./components/projects";
import NavB from "./components/navbar";
import About from "./components/about";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavB />
      <Row style={{marginBottom:"20%"}}>
      <TitleCard/>
      </Row>
      

      <Container>
        <Row style={{marginBottom:"20%"}}>
          <About />
        </Row>
        <Row style={{marginBottom:"20%"}}>
          <Projects />
        </Row>
      </Container>
    </>
  );
}

export default App;
