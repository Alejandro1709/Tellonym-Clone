const express = require('express');
const app = express();

const port = 2021;

app.get('/', (req, res) => {
  res.send('Holaa mundo!!');
});

app.listen(port, () => console.log('Server esta escuchando...'));
