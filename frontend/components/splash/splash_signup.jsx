import React from 'react';
import {withRouter} from 'react-router-dom';

class SplashSignUpForm extends React.Component {
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
    this.props.action(user).then(this.props.history.push('/signup'));
  }

  render() {
    return (
      <div className="splash-form">
        <form className="splash-signup" onSubmit={this.handleSubmit}>
        <h2>New here? Create a free account!</h2>
        <label>
          <input placeholder="Username" type="text" value={this.state.username}
            onChange={this.update('username')} />
        </label>
        <br></br>
        <label>
          <input placeholder="Password" type="password" value={this.state.password}
            onChange={this.update('password')} />
        </label>
        <br></br>
        <div>
          <button>{this.props.formType}</button>
        </div>

      </form>
    </div>
    )
  }

}

export default withRouter(SplashSignUpForm);
