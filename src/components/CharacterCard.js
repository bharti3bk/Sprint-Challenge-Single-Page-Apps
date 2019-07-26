import React from 'react' 
import {Card,CardImg,CardText, CardBody,CardTitle ,CardSubtitle} from "reactstrap";

  export default function CharacterCard(props) {
    return (
      <div>
        <Card>
          <CardImg topwidth="100%" src={props.data.image} alt="Rick and Morty Character" />
          <CardBody>
            <CardTitle>Name : {props.data.name}</CardTitle>
            <CardSubtitle>
               Species : {props.data.species}
            </CardSubtitle>
            <CardText> Status :{props.data.status}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

