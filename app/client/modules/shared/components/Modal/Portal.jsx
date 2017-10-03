import { Component } from 'react';
import { unmountComponentAtNode, unstable_renderSubtreeIntoContainer as render } from 'react-dom';

export default class ModalPortal extends Component {
  componentDidMount() {
    this.portal = document.createElement('div');
    document.body.appendChild(this.portal);
    this.flush();
  }

  componentDidUpdate() {
    this.flush();
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.portal);
    document.body.removeChild(this.portal);
  }

  flush() {
    render(this, this.props.children, this.portal);
  }

  render() {
    return false;
  }
}

