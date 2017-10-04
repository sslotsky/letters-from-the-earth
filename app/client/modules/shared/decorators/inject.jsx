import React from 'react';

export default function inject(select = () => ({})) {
  return Component => props => <Component {...props} {...select(props)} />;
}
