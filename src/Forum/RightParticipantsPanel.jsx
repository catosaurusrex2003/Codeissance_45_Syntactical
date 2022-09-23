import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function RightParticipantsPanel() {
    return (  
      <Card style={{ width: '18rem' , display : 'inline-block', float : 'right', height : '80vh' }}>
        <Card.Header>All Participants</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Participant 1</ListGroup.Item>
          <ListGroup.Item>Participant 2</ListGroup.Item>
          <ListGroup.Item>Participant 3</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
  
  export default RightParticipantsPanel;
