import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter, matchPath } from 'react-router'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { initializeStore } from '@orange-marmalade/paginate-this';

import 'APP_ROOT/init';
import createStore from 'APP_ROOT/store'
import App from 'APP_ROOT/App'
import { setUser } from 'MODULES/identity/actions';

import preloader from './preloader';
import template from './template'
import { bundle, vendorBundle } from './assets';

export default function render(req, res) {
  const store = createStore(true);
  initializeStore(store);

  if (req.currentUser) {
    store.dispatch(setUser(req.currentUser));
  }

  const context = {};

  const sheet = new ServerStyleSheet()

  preloader(req, store).loadPage('letterRequests').then(() => {
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
      res.redirect(context.statusCode || 301, context.url)
    } else {
      const status = context.status || 200
      res.status(status).send(template(html, store.getState(), { bundle, vendorBundle, styleTags }))
    }
  });
}

