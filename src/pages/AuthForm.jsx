import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";

// Firebase config (replace with your actual config)


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic here
      console.log("Logging in:", email, password);
    } else {
      // Register logic here
      console.log("Registering:", email, password);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google user:", result.user);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
<>
<CustomNavbar/>
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
        }}
      >
        <Container style={{ maxWidth: "400px" }}>
          <Card className="bg-dark text-light shadow-lg">
            <Card.Body>
              <h3 className="text-center fw-bold mb-4">
                {isLogin ? "Login to ParkNex" : "Register for ParkNex"}
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="bg-dark text-light border-secondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="bg-dark text-light border-secondary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="success" type="submit" className="w-100 mb-3">
                  {isLogin ? "Login" : "Register"}
                </Button>
                <Button
                  variant="outline-light"
                  className="w-100 mb-2"
                  onClick={handleGoogleSignIn}
                >
                  Continue with Google
                </Button>
                <div className="text-center mt-3">
                  <Button
                    variant="link"
                    className="text-info"
                    onClick={toggleForm}
                  >
                    {isLogin
                      ? "Don't have an account? Register"
                      : "Already have an account? Login"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
  
</>  );
};

export default AuthForm;
