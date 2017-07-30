var express = require('express')
var app = express()
var moment = require('moment')
var PORT = 3000

app.get('/:dateValues', function(req, res) {
  var dateValues = moment(req.params.dateValues, 'MMMM DD, YYYY', true);

  if (!dateValues.isValid())
    dateValues = moment.unix(req.params.dateValues);

  if (!dateValues.isValid()) {
    res.json({
      'natural': null,
      'unix': null
    });
  }

  res.json({
    'natural': dateValues.format('MMMM DD, YYYY'),
    'unix': dateValues.format('X')
  });

})


app.listen(3000, function() {
  console.log('Server working in port '+ PORT);
})
