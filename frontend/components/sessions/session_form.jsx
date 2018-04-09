import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    let urlArray = window.location.href.split("/");
    if (urlArray[urlArray.length - 1] === "login" ||
  urlArray[urlArray.length - 1] === "signup") {
    return (
      <div className="signup-login-body">
      <form className="signup-login" onSubmit={this.handleSubmit}>
        <label className="username-sign">Username:
          <br></br>
          <input className="username-box-sign" type="text" value={this.state.username}
            onChange={this.update('username')} />
        </label>
        <br></br>
        <label className="password-sign">Password:
          <br></br>
          <input className="password-box-sign" type="password" value={this.state.password}
            onChange={this.update('password')} />
        </label>
        <br></br>
        <input className="submit-sign" type="submit" value={this.props.formType} />
      </form>
    </div>
    )
  }
    return (
      <form className="splash" onSubmit={this.handleSubmit}>
        <label className="username">Username
          <input className="username-box" type="text" value={this.state.username}
            onChange={this.update('username')} />
        </label>

        <label className="password">Password:
          <input className="password-box" type="password" value={this.state.password}
            onChange={this.update('password')} />
        </label>

        <input className="submit" type="submit" value={this.props.formType} />

      </form>
    )
  }

}

export default withRouter(SessionForm);
