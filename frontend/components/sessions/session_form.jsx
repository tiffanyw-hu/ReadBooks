import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goodReadsWhy = this.goodReadsWhy.bind(this);
    this.otherOne = this.otherOne.bind(this);
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
      <p>Sign up to see what your friends are reading, get book recommendations,
        and join the world’s largest community of readers.</p>
      )
    }
  }

  otherOne() {
    let otherNameLink = {};
    let otherName = "";
    let otherLink = "";
    if (this.props.formType === "Sign In") {
      otherNameLink["name"] = "Sign Up";
      otherNameLink["link"] = "/signup";
    } else {
      otherNameLink["name"] = "Sign In";
      otherNameLink["link"] = "/login";
    }
    return otherNameLink;
  }

  render() {
    let goodReadsWhy = this.goodReadsWhy();
    let otherNameLink = this.otherOne();
    return (
      <div className="signup-login-body">
      <form className="signup-login" onSubmit={this.handleSubmit}>
        <h3>{this.props.formType} for ReadBooks</h3>
        {goodReadsWhy}
        <label>Username:
          <br></br>
          <input type="text" value={this.state.username}
            onChange={this.update('username')} />
        </label>
        <br></br>
        <label>Password:
          <br></br>
          <input type="password" value={this.state.password}
            onChange={this.update('password')} />
        </label>
        <br></br>
        <button>{this.props.formType}</button>
        <p className="other-p">Already a member?</p>
        <Link to={otherNameLink.link}>{otherNameLink.name}</Link>
      </form>
    </div>
    )
  }

}

export default withRouter(SessionForm);
