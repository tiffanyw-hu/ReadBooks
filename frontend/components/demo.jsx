import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    demo: { username: 'Seshat', password: 'scribe' }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (user) => dispatch(signin(user))
  };
};

class Demo extends React.Component {
  render() {
    const { loggedIn, signin, demo } = this.props;
    if (!loggedIn) {
      return (
        <button
          className='demo-button'
          onClick={() => signin(demo)}
          >Demo
        </button>
      );
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
