import * as React from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect, useDispatch } from "react-redux";
import { updateUserData } from "../Actions/UpdateUserData";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Login",
      firstName: "",
      lastName: "",
      userName: "UserData",
      login: "",
      password: "",
      onLogin: props.onLogin,
      onRegister: props.onRegister,
      loading: false,
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitLogin = async (e) => {
    // const dispatch = useDispatch();
    e.preventDefault();
    // Make API request for login
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: this.state.userName,
          password: this.state.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const user = data.user.username;

        console.log(user);
        updateUserData({
          user,
        });

        // Assuming the server returns a JWT token
        const jwtToken = data.token;
        // Store the token (e.g., in localStorage or state)
        localStorage.setItem("jwtToken", jwtToken);
        // You may also want to redirect the user or perform other actions
        console.log("Login successful");
        this.props.history.push("/mainboard");
      } else {
        this.props.history.push("/mainboard");
        // Handle login failure
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
       this.props.history.push("/mainboard");
    }
  };

  onLogin = (e, username, password) => {};

  onRegister = (event, firstName, lastName, username, password) => {
    event.preventDefault();
  };

  onSubmitRegister = async (event) => {
    event.preventDefault();
    // Make API request for registration
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          password: this.state.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // Assuming the server returns some registration data
        // You can handle the registration response as needed
        console.log("Registration successful:", data);
      } else {
        // Handle registration failure
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  render() {
    return (
      <div className="Container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6">
            <ul
              className="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={classNames(
                    "nav-link",
                    this.state.active === "login" ? "active" : ""
                  )}
                  id="tab-login"
                  onClick={() => this.setState({ active: "login" })}
                >
                  Login
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={classNames(
                    "nav-link",
                    this.state.active === "register" ? "active" : ""
                  )}
                  id="tab-register"
                  onClick={() => this.setState({ active: "register" })}
                >
                  Register
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className={classNames(
                  "tab-pane",
                  "fade",
                  this.state.active === "login" ? "show active" : ""
                )}
                id="pills-login"
              >
                <form onSubmit={this.onSubmitLogin}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      className="form-control"
                      onChange={this.onChangeHandler}
                      required
                    />
                    <label className="form-label" htmlFor="loginName">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      required
                      id="password"
                      name="password"
                      className="form-control"
                      onChange={this.onChangeHandler}
                    />
                    <label className="form-label" htmlFor="loginPassword">
                      Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign in
                  </button>
                </form>
              </div>
              <div
                className={classNames(
                  "tab-pane",
                  "fade",
                  this.state.active === "register" ? "show active" : ""
                )}
                id="pills-register"
              >
                <form onSubmit={this.onSubmitRegister}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control"
                      onChange={this.onChangeHandler}
                      required
                    />
                    <label className="form-label" htmlFor="firstName">
                      First name
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      onChange={this.onChangeHandler}
                      required
                    />
                    <label className="form-label" htmlFor="lastName">
                      Last name
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      className="form-control"
                      onChange={this.onChangeHandler}
                      required
                    />
                    <label className="form-label" htmlFor="login">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="password"
                      name="password"
                      required
                      className="form-control"
                      onChange={this.onChangeHandler}
                    />
                    <label className="form-label" htmlFor="registerPassword">
                      Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-3"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserData: (userData) => dispatch(updateUserData(userData)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
