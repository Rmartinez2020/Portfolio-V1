import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup'

function Contact() {

    return (
        <>
                    <h1 className="m-auto">Contact</h1>
                <CardGroup>
                    <Card>
                        <Card.Title>
                            Email:
                </Card.Title>
                        <Card.Text>
                            Rmartinez5926.rm@gmail.com
                </Card.Text>
                    </Card>
                    <Card>
                        <Card.Title>
                            GitHub:
                </Card.Title>
                        <Card.Link href="https://github.com/Rmartinez2020" target="_blank">
                            https://github.com/Rmartinez2020
                </Card.Link>
                    </Card>
                    <Card>
                        <Card.Title>
                            Resume:
                </Card.Title>
                        <Card.Link>
                            add Download Link
                </Card.Link>
                    </Card>
                </CardGroup>
        </>
    )
}

export default Contact;