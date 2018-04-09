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
    return (
      <form onSubmit={this.handleSubmit}>
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
