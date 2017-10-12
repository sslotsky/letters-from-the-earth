import React from 'react';
import { Redirect } from 'react-router-dom';

export default function redirectOnSubmit(to, push = false) {
  return Component => class extends React.Component {
    state = {
      submitted: false
    }

    onSubmit = (data) => {
      return this.props.onSubmit(data).then(() => this.setState({ submitted: true }));
    }

    render() {
      if (this.state.submitted) {
        return <Redirect to={to} push={push} />;
      }

      return <Component {...this.props} onSubmit={this.onSubmit} />;
    }
  }
}
