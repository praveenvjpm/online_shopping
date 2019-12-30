import React from "react";
import FormInput from "../forn-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password != confirmPassword) {
      alert("password mismatch");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.log(error.message);
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I Dont have an Account</h2>
        <span>Sign Up For An Account</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChnage}
            label="Display Name"
            required
          ></FormInput>

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChnage}
            label="Email"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChnage}
            label="Password"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChnage}
            label="Confirm Password"
            required
          ></FormInput>

          <CustomButton type="submit">SignUp</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
