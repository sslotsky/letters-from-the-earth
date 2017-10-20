import React from 'react';
import overlay from 'MODULES/shared/decorators/overlay';
import { GlyphLink } from './style';

export default function NavGlyph({ name, title, path, color = 'white', ...props }) {
  return overlay({ text: title })(
    <GlyphLink color={color} to={path} {...props}>
      <i className={`fa fa-${name}`} />
    </GlyphLink>
  );
}

