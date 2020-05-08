import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import { loginUser } from "../../actions/authActions";

import "./Auth.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  fillDemoEmail = () => {
    this.setState({ email: "test@test.com" });
  };

  fillDemoPassword = () => {
    this.setState({ password: "test123" });
  };

  render() {
    const { errors } = this.state;

    return (
      // <div className="base-wrapper">
      //   <div className="auth-header">Sign In</div>
      //   <form className="auth-form" noValidate onSubmit={this.onSubmit}>
      //     <div className="auth-group">
      //       <label>
      //         <div className="auth-label">Email address</div>
      //         <input
      //           onChange={this.onChange}
      //           value={this.state.email}
      //           error={errors.email}
      //           id="email"
      //           type="email"
      //           className="auth-input"
      //         />
      //         <div className="auth-error">
      //           {errors.email}
      //           {errors.emailnotfound}
      //         </div>
      //       </label>
      //     </div>

      //     <div className="auth-group">
      //       <label>
      //         <div className="auth-label">Password</div>
      //         <input
      //           onChange={this.onChange}
      //           value={this.state.password}
      //           error={errors.password}
      //           id="password"
      //           type="password"
      //           className="auth-input"
      //         />
      //         <div className="auth-error">
      //           {errors.password}
      //           {errors.passwordincorrect}
      //         </div>
      //       </label>
      //     </div>

      //     <div>
      //       <button type="submit" className="auth-button">
      //         Login
      //       </button>
      //     </div>
      //     <div className="bottom-group">
      //       <Link to="/register" className="link">
      //         Sign up
      //       </Link>
      //     </div>
      //   </form>
      // </div>


      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          id="email"
                          type="email"
                          placeholder="Username"
                          autoComplete="username"
                        />
                        {/* <input
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          id="email"
                          type="email"
                          className="auth-input"
                        /> */}
                        <div className="auth-error">
                          {errors.email}
                          {errors.emailnotfound}
                        </div>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                        {/* <input
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          className="auth-input"
                        /> */}
                        <div className="auth-error">
                          {errors.password}
                          {errors.passwordincorrect}
                        </div>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.onSubmit}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Contact Admin to create an account.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1} disabled={true}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
