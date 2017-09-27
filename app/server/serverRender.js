import React from 'react'
import { renderToString } from 'react-dom/server'
import createStore from 'APP_ROOT/store'
import { Provider } from 'react-redux'
import { StaticRouter, matchPath } from 'react-router'
import App from 'APP_ROOT/App'
import template from './template'
import { bundle, vendorBundle } from './assets';

export default function render(req, res) {
  const store = createStore();

  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )

  if (context.url) {
    res.redirect(301, context.url)
  } else {
    const status = context.status || 200
    res.status(status).send(template(html, store.getState(), { bundle, vendorBundle }))
  }
}

