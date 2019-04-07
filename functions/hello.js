
exports.handler = function(event, context, callback) {

  var url = "https://api.netlify.com/api/v1/forms/wonderful-bassi-177437/submissions?access_token=" + process.env.API_AUTH;

  let request = require('request')
  request(url, function(err, response, body){
    if (err) {
       callback(err)
    } else {
      callback(null, {
        statusCode: 200,
        body
      })
    }
  })
}
