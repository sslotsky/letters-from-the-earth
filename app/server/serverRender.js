import React from 'react'
import { renderToString } from 'react-dom/server'
import createStore from 'APP_ROOT/store'
import { Provider } from 'react-redux'
import { StaticRouter, matchPath } from 'react-router'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from 'APP_ROOT/App'
import template from './template'
import { bundle, vendorBundle } from './assets';

export default function render(req, res) {
  const store = createStore();

  const context = {};

  const sheet = new ServerStyleSheet()

  const html = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    )
  )

  const styleTags = sheet.getStyleTags()

  if (context.url) {
    res.redirect(301, context.url)
  } else {
    const status = context.status || 200
    res.status(status).send(template(html, store.getState(), { bundle, vendorBundle, styleTags }))
  }
}

