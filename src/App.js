/*=== Dependencies === */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavB from "./components/navbar";
import About from "./components/about";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavB />
    <Container>
      <Row>
        <About/>
      </Row>
    </Container>
    </>
  );
}

export default App;
