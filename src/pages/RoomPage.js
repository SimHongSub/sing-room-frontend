import React from "react";
import SingScreen from "../components/SingScreen";
import UserScreen from "../components/UserScreen";
import { Col, Container, Row } from "react-bootstrap";

const RoomPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SingScreen />
        </Col>
        <Col>
          <UserScreen />
          <UserScreen />
        </Col>
      </Row>
    </Container>
  );
};

export default RoomPage;
