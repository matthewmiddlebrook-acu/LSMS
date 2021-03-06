import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import Layout from "../components/Layout";

function LoginPage(props) {
  function submitForm(e) {
    e.preventDefault();
    console.log(e);
    props.history.push("/");
  }

  return (
    <Layout>
      <h1>Login</h1>
      <Form onSubmit={submitForm.bind(this)}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Login</Button>
          </Col>
        </Form.Group>
      </Form>
    </Layout>
  );
}

export default LoginPage;
