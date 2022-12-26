import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


import "./LandingPage.css";

const LandingPage = () => {
  //useEffect(() => {
    //const userInfo = localStorage.getItem("userInfo")
    //if (userInfo) {
      //history.push("/mynotes");
    //}
  //}, [history]);

  return (
    <div className="main">
      <Container>
        <Row className="justify-content-center">
          <div>
            Here the blogpost will reside
            <Container className="buttonContainer">
              <Link to="/register">
                <Button variant="light" size="lg">
                  Sign up
                </Button>{" "}
              </Link>
              <Link to="/login">
                <Button variant="primary" size="lg">
                  Login
                </Button>{" "}
              </Link>
            </Container>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
