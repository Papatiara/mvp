const express = require('express');
const path = require('path');
const http = require('http');
var indico = require('indico.io');
indico.apiKey =  '96e1091c871ec0dd141d326a863fe343';
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/')));

app.post('/sentimentanalysis', (req, res) => {
indico.sentimentHQ(req.body.text)
  .then(function (response) {
    res.send(response.toString());
  })
  .catch(function (error) {
   console.log(error)
   res.sendStatus(500);
  })
});

app.post('/personaalignment', (req, res) => {
  indico.personas(req.body.text)
    .then(function (response) {
      res.send(response);
    })
    .catch(function (error) {
     console.log(error)
     res.sendStatus(500);
    })
  });


app.post('/emotions', (req, res) => {
  indico.emotion(req.body.text)
    .then(function (response) {
      res.send(response);
    })
    .catch(function (error) {
     console.log(error)
     res.sendStatus(500);
    })
  });


const PORT = 3003;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`listening on port ${PORT}...`));

module.exports = app