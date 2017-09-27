import React, { Component } from 'react';
import { RowContent, RowContainer, LinkRow, Grouping } from './style';
import Collapse from 'MODULES/shared/components/Collapse';

export default class LetterGroup extends Component {
  state = {
    open: false
  };

  //toggle = () => this.setState(({ open }) => ({ open: !open }));
  toggle = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { title, types } = this.props;
    const { open } = this.state;

    return (
      <div>
        <RowContainer onClick={this.toggle}>
          <RowContent>
            {title}
          </RowContent>
        </RowContainer>
        <Grouping>
          <Collapse open={open}>
            {types.map(t => (
              <RowContainer key={t.type}>
                <LinkRow to={`/letters/new/${t.type}`}>
                  {t.display}
                </LinkRow>
              </RowContainer>
            ))}
          </Collapse>
        </Grouping>
      </div>
    );
  }
}
