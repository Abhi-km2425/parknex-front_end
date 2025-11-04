import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { registerUserAPI, userLoginAPI } from "../service/allAPI";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
// import { loginAPI, registerAPI } from "../../services/allAPI"; // Add your APIs later
// import { toast } from "react-toastify"; // Add toast later

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState({
    Username: "",
    email: "",
    password: "",
     confirmPassword: "",
  });

  console.log(userDetails);

  const navigate = useNavigate();

  //user regoster api call
const handleRegister = async () => {
  const { Username, email, password, confirmPassword } = userDetails;
  
  if (!Username || !email || !password || !confirmPassword) {
    alert("Fill the form completely");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match");
  } else {
    const result = await registerUserAPI({ Username, email, password }); // No confirmPassword
    console.log("Register:", result);
    alert("User registered successfully");
    setUserDetails({
      Username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  }
};
  //login api call
  const handleLogin = async () => {
    const { email, password } = userDetails;
    if (!email || !password) {
      toast.warning("Fill the form completely");
    } else {
      const result = await userLoginAPI({ email, password });
      console.log("Full API response:", result);

      // Check if result has token property
      if (result.data && result.data.token) {
        sessionStorage.setItem("token", result.data.token);
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        toast.success("Login successful");
        navigate("/");
      } else {
        alert("Login failed - no token received");
      }
    }
  };

  return (
    <>
      <CustomNavbar />
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
              <Form>
                {/* Username - only for register */}
                {!isLogin && (
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Username"
                      className="bg-dark text-light border-secondary"
                      style={{ color: "white" }}
                      value={userDetails.Username}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          Username: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                )}

                {/* Email - for both */}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email"
                    className="bg-dark text-light border-secondary"
                    value={userDetails.email}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                  />
                </Form.Group>

                {/* Password - for both */}
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    className="bg-dark text-white border-secondary"
                    value={userDetails.password}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      })
                    }
                  />
                  {!isLogin && (
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm your Password"
                        className="bg-dark text-light border-secondary"
                        style={{ color: "white" }}
                        value={userDetails.confirmPassword}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  )}
                </Form.Group>

                <div className="d-grid gap-2">
                  {isLogin ? (
                    <Button variant="success" onClick={handleLogin}>
                      Login
                    </Button>
                  ) : (
                    <Button variant="success" onClick={handleRegister}>
                      Register
                    </Button>
                  )}
                </div>

                <div className="text-center mt-3">
                  {isLogin ? (
                    <p className="text-light">
                      Don't have an account?{" "}
                      <Button
                        variant="link"
                        className="text-info p-0"
                        onClick={() => setIsLogin(false)}
                      >
                        Register
                      </Button>
                    </p>
                  ) : (
                    <p className="text-light">
                      Already have an account?{" "}
                      <Button
                        variant="link"
                        className="text-info p-0"
                        onClick={() => setIsLogin(true)}
                      >
                        Login
                      </Button>
                    </p>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
                 <Footer />
        
      </div>
    </>
  );
};

export default AuthForm;
