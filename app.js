const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

// to use : node app.js <city-name> 
// Example : node app.js Antalya
const address = process.argv[2];

if (!address) {
    console.log('Please provide a city');
} else {
    geoCode(address, (error, data) => {
        if (error) {
            // function stops.
            return console.log(error);
        }

        forecast(data.city, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(data.location);
            console.log(forecastData);
        })
    })
}

