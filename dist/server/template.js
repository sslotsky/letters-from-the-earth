"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (html, state, assets) {
  return "\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Letters From The Earth</title>\n    <link href=\"https://fonts.googleapis.com/css?family=Fira+Sans:300,400,700\" rel=\"stylesheet\">\n    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css\" rel=\"stylesheet\">\n    <style>\n      html, body, #app {\n        height: 100%;\n        width: 100%;\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"app\">" + html + "</div>\n  </body>\n  <script>\n    window.__PRELOADED_STATE__ = " + JSON.stringify(state) + "\n  </script>\n  <script src=\"/dist/" + assets.vendorBundle + "\"></script>\n  <script src=\"/dist/" + assets.bundle + "\"></script> \n</html>\n";
};