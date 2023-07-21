/* Libraries installed:
npm install react-bootstrap-validation --save
 */
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
/* import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; */
/* import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; */
import '../css/Sidebar.css';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
function Bootstrap() {
  return (
    <div className="main">
      <form>
          <div class='form-group'>
              <label for="uname">Username</label>
              <input type="text" name="uname" class="form-control" id="uname" placeholder="Please Enter Name"/>
          </div>
          <div class='form-group'>
              <label for="uname">Password</label>
              <input type="password" name="upass" class="form-control" id="upass" placeholder="Please Password"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    /* {<div className="main">
      <h2 style={{textAlign:"center"}}>Basic Login Form</h2>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Logo</h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div> }*/
  );
}
export default Bootstrap;