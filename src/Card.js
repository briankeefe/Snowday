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
import { faCloud, faSnowflake } from "@fortawesome/free-solid-svg-icons";
const THRESHHOLD = 0.1;

const card = props => {
	let snow = props.snow;
	let city = props.city;
	let icon;
	if (snow > THRESHHOLD) {
		icon = <FontAwesomeIcon className="icon" icon={faSnowflake} />;
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
					<Box p={3}>
						<Grid container className="cc-box" justify="center">
							<Box className="fontawesome">{icon}</Box>
						</Grid>
						<Grid container className="cc-box" justify="center">
							<Typography>Snowfall: {snow} in.</Typography>
						</Grid>
						<Grid container className="cc-box" justify="center">
							<Typography>Chance of snowday: {chance}%</Typography>
						</Grid>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};
export default card;
