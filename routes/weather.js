var https = require('https');
var error; //// this will hold error message
function isEmptyObject(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      ////console.log(key + " -> " + obj[key]);
      if (!isBlank(obj[key])) {
        return false;
      }
    }
  }
  return true;
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}


exports.getWeather = function(request, response) 
{
      
    var model = [];
    var completed = 0;
    var inputStr = "Campbell,CA|Omaha,NE|Austin,TX|Timonium,MD";
    // var inputStr = "Campbell,CA";
    if(request.query.q)
        {
            inputStr += "|" + request.query.q.trim();
        }
    inputStr = inputStr.split('|');


    console.log("      Requested Details            ");
    for( var i = 0 ; i< inputStr.length; i++)
    {
        if (inputStr[i].length < 1) { continue;}
        var city = ((inputStr[i].split(','))[0]).trim().replace(/' '/g, '_');
        city = city.split(' ').join('_')
        var state = (inputStr[i].split(','))[1];
        var url = '/api/29da16ce88474189/conditions/q' + '/' + state + '/' + city + '.json';
       

       console.log(city + " , " + state);


        var link = {
            hostname: 'api.wunderground.com',
            port: 443,
            path: url,
            method: 'GET'
        };

        https.get(link, function(res) {
            console.log("Recieved Status  : ", res.statusCode);
            console.log("Recieved Headers : ", res.headers);
            res.on('data', function(d){
                var result = JSON.parse(d);

                if(typeof result.response.error != "undefined")
                {
                    if(result.response.error.type == "keynotfound")
                    {    
                        response.send("Invalid Key");
                        response.end("Done");
                        return; 
                    }
                }

                if(!isEmptyObject(result.current_observation))
                {    
                    model.push(result.current_observation);
                }
            });

            res.on('end', function(){
              if (completed++ == inputStr.length - 1) {
                // All data is collected and is in model
                response.render('weather', {title : "Ebay Weather", model : model});
                
              }      
            });
             res.on('error', function(e) {
                console.log("In error block!!")
                console.error(e);
                response.type('application/json');
                response.send(e);
            });

        });
    }
}


