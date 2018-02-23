import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  right: 2rem;
  top: 2rem;
  z-index: 5;
`;

const Notice = styled.div`
  background-color: ${({ error }) => (error ? "darkred" : "forestgreen")};
  padding: 1rem;
  font-size: 1.5rem;
  min-width: 15rem;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
`;

export const toasty = {
  listeners: [],
  toast: function(message) {
    this.listeners.forEach(l => l.toast(message));
  },
  error: function(message) {
    this.listeners.forEach(l => l.error(message));
  },
  listen: function(f) {
    this.listeners.push(f);
    return () => {
      this.listeners.splice(this.listeners.indexOf(f), 1);
    };
  }
};

export default class Toast extends React.Component {
  state = {
    messages: [],
    errors: []
  };

  toast = message => {
    this.setState(state => ({ messages: state.messages.concat(message) }));
  };

  error = message => {
    this.setState(state => ({ errors: state.errors.concat(message) }));
  };

  componentDidMount() {
    this.close = toasty.listen({ toast: this.toast, error: this.error });

    this.clock = setInterval(() => {
      const { messages, errors } = this.state;

      if (this.clock && (messages.length || errors.length)) {
        this.setState(state => ({
          messages: state.messages.slice(1, state.messages.length - 1),
          errors: state.errors.slice(1, state.errors.length - 1)
        }));
      }
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
    this.close();
  }

  render() {
    return (
      <Container>
        {this.state.messages.map((m, i) => (
          <Notice key={i}>
            {m}
          </Notice>
        ))}
        {this.state.errors.map((m, i) => (
          <Notice key={i} error>
            {m}
          </Notice>
        ))}
      </Container>
    );
  }
}
