const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('Hey Routmate!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
