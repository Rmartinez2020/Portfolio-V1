import React from "react";
import Carousel from 'react-bootstrap/Carousel'

function Projects() {
    const images = [
        {
            original: process.env.PUBLIC_URL + "/images/TipTopNails.png",
            originalAlt: "Project Screenshot",
            originalTitle: "Tip Top Nails",
            description: "Website made for a local nail salon using MERN stack.",
            repo: "https://github.com/Rmartinez2020/TipTopNails",
            live: "https://www.tiptopnailsvero.com",
        },
        {
            original: process.env.PUBLIC_URL + "/images/Employee_management.png",
            originalAlt: "Project Screenshot",
            originalTitle: "Employee Management",
            description: "App to filter through employees made with React and use of third party API.",
            repo: "https://github.com/Rmartinez2020/Employee_Management",
            live: "https://rmartinez2020.github.io/Employee_Management/",
        },
        {
            original: process.env.PUBLIC_URL + "/images/note_taker.png",
            originalAlt: "Project Screenshot",
            originalTitle: "Note Taker",
            description: "Note taker app made with express.",
            repo: "https://github.com/Rmartinez2020/Note_Taker",
            live: "https://fathomless-sierra-37004.herokuapp.com/",
        },
        {
            original: process.env.PUBLIC_URL + "/images/TipTopNails.png",
            originalAlt: "Project Screenshot",
            originalTitle: "The HUB",
            description: "Bussiness app used for communication between employees and managers made using MERN stack.",
            repo: "https://github.com/Rmartinez2020/README_Generator",
        },
    ];
    return (
        <>
            <Carousel controls={false}>
                {images.map(project =>{
                    return(
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={project.original}
                        alt={project.originalAlt}
                    />
                    <Carousel.Caption style={{backgroundColor:"grey", opacity:"90%"}}>
                        <h3>{project.originalTitle}</h3>
                        <p>{project.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>)
                })}
                
            </Carousel>
        </>
    )
}

export default Projects;