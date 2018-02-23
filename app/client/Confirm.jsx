import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { LoginModal } from "MODULES/identity/components/Login";
import { inject } from "MODULES/shared/decorators";
import api from "APP_ROOT/api";
import { toasty } from "APP_ROOT/Toast";
import Home from "./Home";

export class Confirm extends Component {
  state = {
    showLogin: false,
    error: null,
    redirect: false
  };

  componentDidMount() {
    const { token } = this.props;

    api.identity
      .confirmAccount(token)
      .then(() => {
        toasty.toast("Confirmed! You may now log in.");
        this.setState({ showLogin: true });
      })
      .catch(err => {
        if (err.response.status === 422) {
          toasty.error("Sorry, that email confirmation token is invalid.");
          this.setState({ redirect: true });
        }
      });
  }

  close = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { visible, close } = this.props;
    const { showLogin, error, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" push={false} />;
    }

    return (
      <Fragment>
        <Home />
        <LoginModal visible={showLogin} close={this.close} />
      </Fragment>
    );
  }
}

const withToken = inject(({ match }) => ({
  token: match.params.token
}));

export default withToken(Confirm);
