import React from 'react';
import {withRouter} from 'react-router-dom';

class SplashSignInForm extends React.Component {
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
    this.props.action(user).then(this.props.history.push('/login'));
  }

  render() {
    return (
      <form className="splash-signin" onSubmit={this.handleSubmit}>
        <label>
          <input placeholder="username" type="text" value={this.state.username}
            onChange={this.update('username')} />
        </label>

        <label>
          <input placeholder="password" type="password" value={this.state.password}
            onChange={this.update('password')} />
        </label>

        <button>{this.props.formType}</button>

      </form>
    )
  }

}

export default withRouter(SplashSignInForm);
