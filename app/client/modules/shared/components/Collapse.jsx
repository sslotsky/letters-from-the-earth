import React, { Component } from 'react';
import { Container } from './styles';

export default class extends Component {
  state = {
    collapsing: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.open && !this.props.open) {
      this.setState({ collapsing: true });
    }

    if (this.state.collapsing) {
      setTimeout(() => {
        this.setState({ collapsing: false });
      }, 1000);
    }
  }

  render() {
    const { collapsing } = this.state;
    const { open, children } = this.props;

    return (
      <Container open={open}>
        {(open || collapsing) && children}
      </Container>
    );
  }
}
