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

const card = props => {
	let snow = props.snow;
	let city = props.city;
	let code = props.code;
	let desc = props.desc;
	let icon;
	if (code > 800) {
		icon = <FontAwesomeIcon className="icon" icon={faCloud} />;
	} else if (code === 800) {
		icon = <FontAwesomeIcon className="icon" icon={faSun} />;
	} else if (code > 700) {
		icon = <FontAwesomeIcon className="icon" icon={faCloud} />;
	} else if (code >= 600) {
		icon = <FontAwesomeIcon className="icon" icon={faSnowflake} />;
	} else if (code >= 500) {
		icon = <FontAwesomeIcon className="icon" icon={faCloudRain} />;
	} else if (code >= 300) {
		icon = <FontAwesomeIcon className="icon" icon={faWater} />;
	} else if (code >= 200) {
		icon = <FontAwesomeIcon classname="icon" icon={faBolt} />;
	} else {
		icon = <FontAwesomeIcon className="icon" icon={faCloud} />;
	}
	let chance;
	if (snow > 10) {
		chance = 100;
	} else if (snow > 5) {
		chance = 60;
	} else if (snow > 3) {
		chance = 30;
	} else {
		chance = 0;
	}
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
							{icon}
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
