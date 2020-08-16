const request = require('request');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

// geoCode('Antalya', (error, data) => {
//     console.log('error', error);
//     console.log('data', data);
// })

forecast('Antalya', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})