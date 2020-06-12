import React from "react";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "./style.css"

function About() {

    return (
        <>
            <Col>
                <Card className="text-center">
                    <Card.Title> A Little Bit About Me</Card.Title>
                    <Card.Img src={process.env.PUBLIC_URL+ "/images/profile.png"} style={{borderRadius:"50%", width:"18rem"}}/>
                </Card>
            </Col>
        </>
    )
}

export default About;