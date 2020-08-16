const request = require('request');

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service!");
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location.s')
//     }
//     else {
//         console.log("It is currently " + response.body.current.temperature + " out. It feels like " + response.body.current.feelslike);
//     }
// })

const forecast = (city, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ccf96d3ae58e12d4887f61438c5fa244&query=' + city;
    
    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        }
        else if(response.body.error) {
            callback('Unable to find location.', undefined)
        }
        else {
            callback(undefined, response.body)
        }
    })
}

module.exports = forecast;