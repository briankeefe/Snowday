import React from "react";
import {
	Box,
	Card,
	Typography,
	Grid,
	CardContent,
	CardHeader
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCloud,
	faSnowflake,
	faCloudRain,
	faSun,
	faWater,
	faBolt
} from "@fortawesome/free-solid-svg-icons";
const THRESHHOLD = 0.1;

const weather = x => {
	let res;
	if (x > 800) {
		res = faCloud;
	} else if (x === 800) {
		res = faSun;
	} else if (x > 700) {
		res = faCloud;
	} else if (x >= 600) {
		res = faSnowflake;
	} else if (x >= 500) {
		res = faCloudRain;
	} else if (x >= 300) {
		res = faWater;
	} else if (x >= 200) {
		res = faBolt;
	} else {
		res = faCloud;
	}
	return res;
};

let calculate = val => {
	let res;
	if (val > 10) {
		res = 100;
	} else if (val > 5) {
		res = 60;
	} else if (val > 3) {
		res = 30;
	} else {
		res = 0;
	}
	return res;
};
const card = props => {
	let snow = props.snow;
	let city = props.city;
	let code = props.code;
	let desc = props.desc;
	let sign = weather(code);
	let img = <FontAwesomeIcon className="icon" icon={sign} />;

	let chance = calculate(snow);

	return (
		<Box className="outer-card">
			<Card className="component-card">
				<CardHeader title={city} />
				<CardContent>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						textAlign="center"
					>
						<Box display="flex" className="fontawesome">
							{img}
						</Box>
						<Typography id="desc">{desc}</Typography>
						<Typography>Incoming Snowfall: {snow} in.</Typography>
						<Typography>Chance of a snowday: {chance}%</Typography>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};
export default card;
