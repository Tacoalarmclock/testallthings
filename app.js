const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/myip', (req, res) => {
  res.send("your ip is: " + req.ip + "!");
});

app.get('/customecho/:echo', (req, res) => {
  res.send("you sent: " + req.params.echo + " to my server!");
});

app.use('/static', express.static('public'));//serve public subdir under /static

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});