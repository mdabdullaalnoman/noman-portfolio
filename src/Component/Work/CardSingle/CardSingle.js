import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './CardSingle.css';

const CardSingle = (props) => {
    const {tittle, description, image, liveLink, githubLink} = props.info;
    // const handleLive= () => {
    //   const url = {title}
    //   return tittle;
    // }
    return (
        <div className="  col-md-4 mb-3 mb-md-2">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title className="tittle2"><p>{tittle}</p></Card.Title>
            <Card.Text className="description2">{description}</Card.Text>
            <div className="row">
              <div className="col-6 left"><a href={liveLink}>live</a></div>
              <div className="col-6 right"><a href={githubLink}>Github</a></div>
            </div>
          </Card.Body>
       </Card>
      </div>
    );
};

export default CardSingle;