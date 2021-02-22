var express = require('express');
var app = express();
var path = require('path');
const port = 3000

app.get('/', (req, res) => {
  // servindo arquivos como retorno no servidor
  res.sendFile('views/index.html' , { root : __dirname});
})

// serve static files on public folder
app.use('/public', express.static('public'));

// response value as json 
/*app.get('/json', function(req, res){
  res.json({"message": "Hello json"})
})*/


app.get("/json", function(req, res) {
  let message = 'Hello json'
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.status(200).json({"message": message.toUpperCase()})
  }
  return res.status(200).json({"message": message})
})











 module.exports = app;
