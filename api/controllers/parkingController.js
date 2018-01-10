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