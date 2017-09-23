import React from 'react';
import { Button } from 'APP_ROOT/styled/Layout';
import { withRouter } from 'react-router';
import { Container, Terms, Actions } from './styles';
import terms from './terms';

export default function tos(Component) {
  return withRouter(
    class extends React.Component {
      state = {
        agree: false,
        commit: false
      };

      toggleAgree = () => this.setState(({ agree }) => ({ agree: !agree }));
      commit = () => this.setState({ commit: true });
      cancel = () => this.props.history.goBack();

      render() {
        const { agree, commit } = this.state;

        if (commit) {
          return <Component {...this.props} />;
        }

        return (
          <Container>
            <Terms>
              {terms}
            </Terms>
            <Actions>
              <label>
                <input type="checkbox" checked={agree} onChange={this.toggleAgree} />
                I agree to these terms
              </label>
              <Button disabled={!agree} onClick={this.commit}>
                Continue
              </Button>
              <Button onClick={this.cancel}>
                Cancel
              </Button>
            </Actions>
          </Container>
        );
      }
    }
  );
}
