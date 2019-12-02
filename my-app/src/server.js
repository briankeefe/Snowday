const express = require('express')
const app = express()
const port = 3001

var weather = require('openweather-apis');
 
weather.setLang('en');
weather.setZipCode(12932);

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/weather', (req, res) => {
    let cur = 0;
    weather.getTemperature((err, temp) => {
        cur = temp;
        console.log(err);
    })
    console.log(cur);
    res.send('logged');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))