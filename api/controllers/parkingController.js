'use strict';

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

    var result = {
        code: 1,
        description: "success"
    };

    res.send(result);    //success
}

exports.get_origin_data = function (req, res) {
    var options = {
        host: 'www.wroclaw.pl',
        port: 80,
        path: '/open-data/api/action/datastore_search?resource_id=61aa2014-31d5-4d62-b296-2002391430e2'
      };
      
      http.get(options, function(resp){
        resp.on('data', function(chunk){
          res.send(chunk);
        });
      }).on("error", function(e){
        console.log("Got error: " + e.message);
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