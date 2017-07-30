var express = require('express')
var parser = require('body-parser')
var cors = require('cors')
var app = express()
var PORT = 3000

app.use(parser.json())
app.use(cors())

app.get('/dateValues/:dateVal', function(req, res, next) {
  var dateValues = req.params.dateVal
  var dateFormattingOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  if(isNaN(dateValues)) {
    var naturalDate = new Date(dateValues)
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions)
    var unixDate = new Date(dateValues).getTime()/1000
  } else {
    var unixDate = dateValues
    var naturalDate = new Date(dateValues * 1000)
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions)
  }


  res.json({unix: unixDate, natural: naturalDate})
})


app.listen(3000, function() {
  console.log('Server working in port '+ PORT);
})
