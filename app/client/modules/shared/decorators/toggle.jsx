import React from 'react';

export default function toggle(Component) {
  return class extends React.Component {
    state = {
      visible: false
    };

    open = () => this.setState({ visible: true });
    close = () => this.setState({ visible: false });

    render() {
      return <Component {...this.props} {...this.state} open={this.open} close={this.close} />;
    }
  }
}
