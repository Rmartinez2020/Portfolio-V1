import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

function TitleCard () {
    return(
    <Card>
        <Card.Img src={process.env.PUBLIC_URL + "/images/cover_image.jpg"} fluid="true" />
        <div className="card-img-text">
        <Card.Title style={{fontSize:"30px"}}>
            Rogelio
        </Card.Title>
        <Card.Subtitle style={{fontSize:"25px"}}>
        Orosco Martinez
        </Card.Subtitle>
        <Card.Text>
            Junior Full Stack Web Developer
        </Card.Text>
        </div>
    </Card>
    )
}

export default TitleCard;