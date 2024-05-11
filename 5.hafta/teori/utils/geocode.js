const geocode =(address,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+
    '.json?access_token=pk.eyJ1IjoiaWZzNSIsImEiOiJja215YnU1NHIwMmU4MnVvMnl0dnl2YndjIn0.iIitdw0flCDPjlnjP0Kl7g&limit=1'
}

request({url:url,json:true},(error,response)=>{
    if(error){
        callback("Bağlanamadı",undefined)
    }else if(response.body.features.length===0){
        callback("Konum Yanlış",undefined)
    }else{
        callback(undefined,{
            latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            location:response.body.features[0].place_name
        })
    }
})

module.exports = geocode

geocode('Bursa', (error, {latitude, longitude, location} = {} ) => {
    if (error) {
    return console.log(error) 
    }
    forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
    return console.log(error)
    }
    console.log(location)
    console.log(forecastData)
    })
    })

    request( {url, json:true}, (error, { body }) => {
        if (error) {
        callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
        callback('Unable to find location', undefined)
        }
        else {
        callback(undefined, 'Hava şu anda: ' +
       body.current.weather_descriptions[0] + ' Hava sıcaklığı şu anda: ' +
       body.current.temperature + ' derece ve hissedilen sıcaklık: ' +
       body.current.feelslike + ' derece')
        }
        })

        request( {url, json: true}, (error, { body }) => {
            if (error) {
            callback('Unable to connect to location services!', undefined)
            } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search',
           undefined)
            } else {
            callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
            })
            }
            })