import React from "react";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "./style.css";

function About() {

    return (
        <>
            <Col>
                <Card className="text-center">
                    <Card.Title> A Little Bit About Me</Card.Title>
                    <Card.Img src={process.env.PUBLIC_URL + "/images/profile.png"} style={{ borderRadius: "50%", width: "18rem", margin:"auto" }} />
                    <Card.Body>
                        <Card.Text>
                            Full stack developer with a recently acquired certificate from the University of Central Florida Coding Boot Camp. Technical skills include HTML, CSS, JavaScript,  SQL, and Bootstrap framework. Have a background leading one of the top production lines at a paper mill and working with a team to maximize productivity.  I enjoy solving programming problems and breaking them down to find the best solution to the problem. Ecstatic to start programming with others to  develop captivating innovative web applications.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default About;