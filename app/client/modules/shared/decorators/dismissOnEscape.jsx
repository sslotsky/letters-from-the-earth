import React from 'react';

export default function dismissOnEscape(Component) {
  return class extends React.Component {
    componentDidMount() {
      window.addEventListener('keydown', this.listener);
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.listener);
    }

    listener = e => {
      if (e.which === 27) {
        this.props.close();
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }
}
