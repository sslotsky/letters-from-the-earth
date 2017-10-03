import React from 'react';
import { dismissOnEscape } from 'MODULES/shared/decorators';
import Portal from './Portal';
import { Backdrop, Dialog, ModalContainer, Header, Close, Content } from './styles';

export function Modal({ visible = false, close, title, children }) {
  const stop = e => e.stopPropagation();

  return visible && (
    <Portal>
      <Backdrop />
      <ModalContainer onClick={close}>
        <Dialog onClick={stop}>
          <Header>
            <Close onClick={close}>
              <i className="fa fa-times" />
            </Close>
            <h1>{title}</h1>
          </Header>
          <Content>
            {children}
          </Content>
        </Dialog>
      </ModalContainer>
    </Portal>
  );
}

export default dismissOnEscape(Modal);
