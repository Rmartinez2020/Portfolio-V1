import React from "react";
import Carousel from 'react-bootstrap/Carousel'

function Projects() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL+ "/images/TipTopNails.png"}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{backgroundColor:"grey", opacity:"90%"}}>
                        <h3>Tip Top Nails</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Projects;