import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goodReadsWhy = this.goodReadsWhy.bind(this);
    this.otherOne = this.otherOne.bind(this);
    this.handleClickError = this.handleClickError.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.action(user);
  }

  goodReadsWhy() {
    if (this.props.formType === "Sign In") {
      return (<p></p>)
    } else {
      return (
      <div className="goodReadsWhy"><p>Sign up to see what your friends are reading, get book recommendations,
        and join the world’s largest community of readers.</p></div>
      )
    }
  }

  handleClickError(e) {
    this.props.clearErrors();
  }

  otherOne() {
    let otherNameLink = {};
    if (this.props.formType === "Sign In") {
      otherNameLink["name"] = "Sign Up";
      otherNameLink["link"] = "/signup";
      otherNameLink["text"] = "Not a member?";
    } else {
      otherNameLink["name"] = "Sign In";
      otherNameLink["link"] = "/login";
      otherNameLink["text"] = "Already a member?";
    }
    return otherNameLink;
  }

  renderError() {
    let error = [<div></div>];
    if (this.props.errors.length !== 0) {
      error = [<div className="error">{this.props.errors[0]}</div>];
    }
    return error;
  }

  render() {
    let goodReadsWhy = this.goodReadsWhy();
    let otherNameLink = this.otherOne();
    let error = this.renderError();
    return (
      <div className="signup-login-body">
      <form className="signup-login" onSubmit={this.handleSubmit}>
        <h3>{this.props.formType} for ReadBooks</h3>
        {goodReadsWhy}
        <div className="container-ception">
          {error}
        <div className="sign-container">
          <label><p>Username</p>
            <br></br>
            <input type="text" value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <br></br>
          <label><p>Password</p>
            <br></br>
            <input type="password" value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <br></br>
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
          <div className="other-name-container">
            <p className="other-p">{otherNameLink.text}</p>
            <Link to={otherNameLink.link} onClick={this.handleClickError}>{otherNameLink.name}</Link>
          </div>
      </div>
    </div>
      </form>
    </div>
    )
  }

}

export default withRouter(SessionForm);
