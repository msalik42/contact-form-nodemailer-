// bodyParser to get data from the body  (req.body)
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

app.get('/', function(req,res){
  res.render('contact');
});

app.post('/', urlencodedParser, function(req,res){

  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'example@gmail.com',
      pass: 'password'
    }
  });

  var mailOptions = {
    from: 'example@gmail.com',
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.end('Message sent');
});

}
