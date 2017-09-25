export default (html, state) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Letters From The Earth</title>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,700" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet">
    <style>
      html, body, #app {
        height: 100%;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="app">${html}</div>
  </body>
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
  </script>
  <script src="/assets/bundle.js"></script>
</html>
`

