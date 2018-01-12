'use strict';

//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

/*
Liczba_Wolnych_Miejsc: "317",
Liczba_Poj_Wjezdzajacych: "3",
Nazwa: "Narodowe Forum Muzyki",
Liczba_Poj_Wyjezdzajacych: "2",
Czas_Rejestracji: "2018-01-11 17:23:24",
_id: 1
*/
var ParkingSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  Liczba_Wolnych_Miejsc: {
    type: Number
  },
  Liczba_Poj_Wjezdzajacych: {
    type: Number
  },
  Liczba_Poj_Wyjezdzajacych: {
    type: Number
  },
  Nazwa: {
    type: String
  },
  Czas_Rejestracji: {
      type: Date
  }
});

//module.exports = mongoose.model('Parkings', ParkingSchema);