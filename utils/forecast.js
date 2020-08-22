const request = require('request');

const forecast = (city, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ccf96d3ae58e12d4887f61438c5fa244&query=' + city;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        }
        else if (body.error) {
            callback('Unable to find location.', undefined)
        }
        else {
            callback(undefined, "It is currently " + body.current.temperature + " out. It feels like " + body.current.feelslike)
        }
    })
}

module.exports = forecast;