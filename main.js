var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('pug').compileFile(__dirname + '/src/views/index.pug')
  , appPort = 8081

app.use(logger('dev'))
app.use(express.static(__dirname + '/src/stylesheets'))

app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(appPort, function () {
  console.log('Listening on http://localhost:' + (appPort))
})