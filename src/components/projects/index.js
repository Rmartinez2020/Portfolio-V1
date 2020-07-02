import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import "./style.css";

function Projects() {
    const images = [
        {
            original: process.env.PUBLIC_URL + "/images/TipTopNails.png",
            originalAlt: "Project Screenshot",
            originalTitle: "Tip Top Nails",
            description: "Website made for a local nail salon using MERN stack.",
            repo: "https://github.com/Rmartinez2020/TipTopNails",
            live: "https://www.tiptopnailsvero.com",
            tech: [
                "MongoDB",
                "Mongoose",
                "Express",
                "React",
                "Node.js"
            ]
        },
        {
            original: process.env.PUBLIC_URL + "/images/employee_management.png",
            originalAlt: "Project Screenshot",
            originalTitle: "Employee Management",
            description: "App to filter through employees made with React and use of third party API.",
            repo: "https://github.com/Rmartinez2020/Employee_Management",
            live: "https://rmartinez2020.github.io/Employee_Management/",
            tech:[
                "React",
                "API",
                "JavaScript"
            ]
        },
        {
            original: process.env.PUBLIC_URL + "/images/todo.png",
            originalAlt: "Project Screenshot",
            originalTitle: "To-Do App",
            description: "Simple To Do list made in React.",
            repo: "https://github.com/Rmartinez2020/todoApp",
            live: "https://rmartinez2020.github.io/todoApp/",
            tech:[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Bootstrap"
            ]
        },
        {
            original: process.env.PUBLIC_URL + "/images/hub.png",
            originalAlt: "Project Screenshot",
            originalTitle: "The HUB",
            description: "Bussiness app used for communication between employees and managers made using MERN stack.",
            repo: "https://github.com/Rmartinez2020/README_Generator",
            tech:[
                "MongoDB",
                "Mongoose",
                "Express",
                "React",
                "Node.js",
                "passport.js",
                "MVC"
            ]
        },
    ];
    return (
        <>
        <h1 className="m-auto">My Work</h1>
            <Carousel controls={false} className="my-2">
                {images.map((project, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-100"
                                src={project.original}
                                alt={project.originalAlt}
                            />
                            <Carousel.Caption style={{ backgroundColor: "grey", opacity: "90%" }}>
                                <h3>{project.originalTitle}</h3>
                                <p>{project.description}</p>
                                {project.tech.map((item, index) => {
                                       return (<><Badge className="mr-2" variant="secondary" key={index}>{item}</Badge></>)
                                })}
                                <br/>
                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                    <button className="btn m-2" style={{color:"white", borderColor:"black"}}>Source Code</button>
                                </a>
                                {project.live ? 
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <button className="btn m-2" style={{color:"white", borderColor:"black"}}>Demo</button>
                                </a> : "" }
                                
                            </Carousel.Caption>
                        </Carousel.Item>)
                })}

            </Carousel>
        </>
    )
}

export default Projects;