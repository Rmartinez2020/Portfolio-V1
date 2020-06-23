import React from "react";
import Col from "react-bootstrap/Col";
function Contact() {

    return (
        <>
            <Col lg={4}>
                <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="rogeliooroscomartinez"><a class="LI-simple-link" href='https://www.linkedin.com/in/rogeliooroscomartinez?trk=profile-badge'>Rogelio Orosco Martinez</a></div>
            </Col>
            <Col>
            </Col>
            <Col>
                <div style={{ height: "100%" }}>
                    <div className="m-5">
                        <p><span>Email: </span>rmartinez5926.rm@gmail.com</p>
                    </div>
                    <div className="m-5">
                        <p><span>Phone: </span>(321) 948-1164</p>
                    </div>
                    <div className="m-5">
                        <p><span>Resume: </span><a href="" download>Download A Copy</a></p>
                    </div>
                    <div className="m-5">
                        <p><span>Github: </span> <a href="https://github.com/Rmartinez2020" target="_blank" rel="noopener noreferrer">https://github.com/Rmartinez2020</a></p>
                    </div>
                </div>
            </Col>

        </>
    )
}

export default Contact;