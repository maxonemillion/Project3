import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function login(event) {
    event.preventDefault();
    console.log(username, password)

    if (username === "asdf") {
      console.log("logged in")
    } else {
      console.log("error")
    }
  }

    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="formBasicLogin">
              <Form.Label>Username</Form.Label>
              <Form.Control  type="login" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button className="mb-5" id="login" variant="primary" type="login" onClick={login}>
              Login
            </Button>
            <br></br>
            <Form.Label>Don't have an account? <Link to="/SignupPage">Sign up!</Link></Form.Label>
          </Form>
        </Container>
      </div>
    );
}

export default LoginPage;