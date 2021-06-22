const placeDatabase = require('../db/placeDB');
const db = new placeDatabase();
const keys = require('../db/keys');
const request = require('request');

exports.getAllPlaces = (req, res) => {
    const r = db.placeQuery();
    //console.log(r);
    r.then((data) =>{
       // console.log(data);
        //db.endConn();
        return res.json(data);
    })
    .catch((err) => {
        db.endConn();
        return res.status(500).end('get all places Server error');
    });
};

exports.addPlace = async (req, res) =>{
    try {
    
        console.log(req.body);
        const { id, title, description, address } = req.body;

        var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
                  + encodeURIComponent(address) + '.json?access_token='
                  + keys.MAP_ACCESS + '&limit=1';
                  
        request({ url: url, json: true }, async (err, response) =>{
            if(err){
                callback('Unable to connect to GeoCode API', undefined);
                console.log(err);
            }else if( response.body.features.length === 0){
                callback('Unable to find location. Try to '
                     + 'search another location.');
                console.log('Address error');
            }else {
                // var lng = response.body.features[0].center[0];
                // var lat = response.body.features[0].center[1];
                const result = await db.writePlaceQuery(
                    id,
                    title,
                    description,
                    address,
                    response.body.features[0].center[1],
                    response.body.features[0].center[0]
                );
                return res.status(200).json({
                    success: true,
                    data: result
                });
            }
        })

        // const result = await db.writePlaceQuery(
        //     id,
        //     title,
        //     description,
        //     address,
        //     lat,
        //     lng
        // );
        // return res.status(200).json({
        //     success: true,
        //     data: result
        // });
    } catch (err) {
        console.log(err);
    return res.status(500).send('adding Place Server error');
    }
}