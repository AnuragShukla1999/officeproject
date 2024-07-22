// src/Profile.js

import { AuthContext } from 'contexts/ConfigContext';
import React, { useContext } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

// const { user } = useContext(AuthContext);

const Profile = () => {

  // console.log(user)
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>User Name: </Card.Title>
              {/* <Card.Title>g</Card.Title> */}
              <Card.Text>
                <strong>Email:</strong> user@example.com
              </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Location:</strong> City, Country</ListGroup.Item>
              <ListGroup.Item><strong>Joined:</strong> January 2023</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit
                massa vel ligula pulvinar, at hendrerit libero posuere. Nulla facilisi.
                Donec varius libero vitae magna fringilla, vitae malesuada justo rutrum.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
