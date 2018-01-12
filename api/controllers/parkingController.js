'use strict';
var request = require("request");
var mongoose = require('mongoose'),
    Parking = mongoose.model('Parkings');

exports.list_all_parkings = function (req, res) {
    //todo read from db


    // sample data
    var parkings = [{
        name: "Renoma",
        places: 245
    },
    {
        name: "Arkady",
        places: "345"
    }];

    res.send(parkings);
};

exports.update_all_parkings = function (req, res) {
    // todo authorization

    request.get("https://www.wroclaw.pl/open-data/api/action/datastore_search?resource_id=61aa2014-31d5-4d62-b296-2002391430e2", function(err, response, body){
        if (err) {
            console.log(err);
            // todo save error to db
            res.send(null);
        } else {
            try {
                var json = JSON.parse(response.body);
                var parkings = json.result.records;
                for (var i in parkings) {
                    var park = new Parking(parkings[i]);
                    park.save(function(error, parking) {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            console.log("Parking saved");
                        }
                    });
                }
                res.send("OK");    // todo better object
            }
            catch (ex) {
                res.send(ex);
            }
        }
    });
}

exports.get_origin_data = function (req, res) {
    request.get("https://www.wroclaw.pl/open-data/api/action/datastore_search?resource_id=61aa2014-31d5-4d62-b296-2002391430e2", function(err, response, body){
        if (err) {
            console.log(err);
            // todo save error to db
            res.send(null);
        } else {
            res.send(response);    
        }
    });
/*
    var data = {
        resource_id: '61aa2014-31d5-4d62-b296-2002391430e2', // the resource id
        limit: 10, // get 5 results
        q: 'jones' // query for 'jones'
      };
      $.ajax({
        url: 'https://www.wroclaw.pl/open-data/api/action/datastore_search',
        data: data,
        dataType: 'jsonp',
        success: function(data) {
          res.send(data);
        }
      });*/
}