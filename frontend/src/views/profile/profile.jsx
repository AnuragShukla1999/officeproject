import { AuthContext } from 'contexts/ConfigContext';
import React, { useContext } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';


const Profile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.validUser)

  // console.log(user)
  return (
    // <Container className="mt-4">
    //   <Row>
    //     <Col>
    //       <Card>
    //         <Card.Body>
    //           <Card.Title>User Name: {user?.validUser?.name}</Card.Title>
    //           {/* <Card.Title>g</Card.Title> */}
    //           <Card.Text>
    //             <strong>Email:</strong> {user?.validUser?.email}
    //           </Card.Text>
    //         </Card.Body>
    //         <ListGroup variant="flush">
    //           <ListGroup.Item><strong>Location:</strong> City, Country</ListGroup.Item>
    //           <ListGroup.Item><strong>Joined:</strong> {user?.validUser?.updatedAt}</ListGroup.Item>
    //         </ListGroup>
    //         <Card.Body>
    //           <Card.Title>About Me</Card.Title>
    //           <Card.Text>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit
    //             massa vel ligula pulvinar, at hendrerit libero posuere. Nulla facilisi.
    //             Donec varius libero vitae magna fringilla, vitae malesuada justo rutrum.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>




    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
                  <h5>{user?.validUser?.name}</h5>
                  
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{user?.validUser?.email}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Created At</h6>
                        <p className="text-muted">{user?.validUser?.createdAt}</p>
                      </div>
                    </div>
                    <h6>Projects</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Recent</h6>
                        <p className="text-muted">Lorem ipsum</p>
                      </div>
                      <div className="col-6 mb-3"> 
                        <h6>Most Viewed</h6>
                        <p className="text-muted">Dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default Profile;
