const request = require('request');

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoib25yc3prIiwiYSI6ImNrZHc0a3hlMzJvanIyeHR2OG1yZXF0a3QifQ.LNzb1Zq6pL-fDpP7HfzQMw&limit=1';

    return request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect location service', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name,
                city: body.features[0].text
            })
        }
    })
}

module.exports = geoCode;