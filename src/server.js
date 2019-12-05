const express = require("express");
const app = express();
var cors = require("cors");
//app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
const port = 3001;

var weather = require("openweather-apis");

let key = "b8f96dbe2d3ff099ad87b72c8eb0aa35";
weather.setLang("en");
weather.setCity("Anchorage");
weather.setUnits("imperial");
weather.setAPPID(key);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/snow", (req, res) => {
	console.log(req.query);
	if (req.query.zip) {
		weather.setZipCode(req.query.zip);
		weather.getAllWeather((err, json) => {
			if (err) {
				console.log(err);
				res.send(err);
			} else {
				res.send(json);
			}
		});
	} else {
		res.send("Please provide a value for zip");
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
