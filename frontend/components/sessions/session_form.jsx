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
        Welcome to GoodReads!
        <h3>{this.props.formType}</h3>
        <label>Username:
          <input type="text" value={this.state.username}
            onChange={this.update('username')} />
        </label>

        <label>Password:
          <input type="password" value={this.state.password}
            onChange={this.update('password')} />
        </label>

        <input type="submit" value={this.props.formType} />

      </form>
    )
  }

}

export default SessionForm;
