import React, { Component } from 'react';
import { Container } from './styles';

export default class extends Component {
  state = {
    mint: true
  };

  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.mint && nextProps.open !== this.props.open) {
      this.setState({ mint: false });
    }
  }

  render() {
    const { open, children } = this.props;

    if (this.state.mint) {
      return (
        <div>
          {open && children}
        </div>
      );
    }

    return (
      <Container open={open}>
        {children}
      </Container>
    );
  }
}
