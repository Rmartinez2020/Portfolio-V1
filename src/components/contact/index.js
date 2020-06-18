import React from "react";
import Col from "react-bootstrap/Col";
function Contact() {

    return (
        <>
        <Col lg={8}>
        </Col>
            <Col>
                <div style={{backgroundColor:"lightgrey", height:"100%"}}>
                <div>
                    <p><span>Email: </span>rmartinez5926.rm@gmail.com</p>
                </div>
                <div>
                    <p><span>Phone: </span>(321) 948-1164</p>
                </div>
                <div>
                    <p><span>Resume: </span><a href="" download>Download A Copy</a></p>
                </div>
                </div>
            </Col>

        </>
    )
}

export default Contact;