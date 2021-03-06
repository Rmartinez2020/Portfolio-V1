/*=== Dependencies === */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TitleCard from "./components/TitleCard";
import Projects from "./components/projects";
import NavB from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavB />
      <Row style={{ marginBottom: "20%" }}>
        <TitleCard />
      </Row>


      <Container>
        <Row style={{ marginBottom: "20%" }} id="about">
          <About />
        </Row>
        <Row style={{ marginBottom: "20%" }} id="mywork">
          <Projects />
        </Row>
        <Row className="justify-content-md-center" id="contact">
        <h1 className="m-auto">Contact</h1>
        </Row>
        <Row style={{ marginBottom: "20%" }}>
          <Contact />
        </Row>
      </Container>
    </>
  );
}

export default App;
