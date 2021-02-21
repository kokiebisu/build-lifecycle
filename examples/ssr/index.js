const React = require('react');
const { renderToString } = require('react-dom/server');
const { RandomComponent } = require('lifecycle');
const express = require('express');

const app = express();

app.get('*', (req, res) => {
  const html = renderToString(React.createElement(RandomComponent));
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      ${html}
  </body>
  </html>`);
});

app.listen(3000, () => {
  console.log('listening');
});
