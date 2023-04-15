import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo, "-------");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <FormContainer>
      <h1>sign in</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="my-3" variant="primary">
          Login
        </Button>
      </Form>
      <Row>
        <Col>
          New User? <Link to="/">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
