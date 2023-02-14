const express = require('express');
const app = express();
const port = 3001;
app.get('/', (req, res) => {
  res.send(`<h1 style="background-color:salmon;">hello world</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log('pkp')