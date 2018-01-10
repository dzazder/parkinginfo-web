'use strict';

module.exports = function(app) {
    var parkingList = require('../controllers/parkingController');

    app.route('/parking/getAll').get(parkingList.list_all_parkings);
    app.route('/parking/updateAll').get(parkingList.update_all_parkings);
    app.route('/parking/getOriginData').get(parkingList.get_origin_data);
};