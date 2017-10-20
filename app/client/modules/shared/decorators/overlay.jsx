import React from 'react';
import styled from 'styled-components';
import Portal from 'MODULES/shared/components/Modal/Portal';

const Overlay = styled.div`
  position: fixed;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  z-index: 3;
  background-color: orange;
  padding: .5rem;
  border-radius: .25rem;
  color: white;
`;

export default function overlay({ text }) {
  return elem => {
    const Container = class extends React.Component {
      state = {
        visible: false,
        box: null
      };

      hover = (e) => {
        this.setState({ visible: true, box: e.target.getBoundingClientRect() });
      }

      vanish = (e) => {
        this.setState({ visible: false });
      }

      toBottomRight() {
        const { top, left, height, width } = this.state.box;

        return {
          top: top + height + 3,
          left: left + (width / 2)
        };
      }

      render() {
        return [
          React.cloneElement(elem, {
            key: "content",
            onMouseOver: this.hover,
            onMouseOut: this.vanish
          }),
          <Portal key="portal">
            {this.state.visible && (
              <Overlay top={this.toBottomRight().top} left={this.toBottomRight().left}>
                {text}
              </Overlay>
            )}
          </Portal>
        ]
      }
    }

    return <Container />;
  }
}
