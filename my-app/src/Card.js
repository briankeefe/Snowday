import React from "react";
import { Box, Card, Typography, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCloud } from "@fortawesome/free-solid-svg-icons";
const card = props => {
	let temp = props.temp;
	let icon;
	if (temp > 50) {
		icon = <FontAwesomeIcon className="icon" icon={faBolt} />;
	} else {
		icon = <FontAwesomeIcon className="icon" icon={faCloud} />;
	}
	return (
		<Box>
			<Card className="component-card">
				<Box p={3}>
					<Grid container className="cc-box" justify="center">
						<Typography>Weather Text</Typography>
					</Grid>
					<Grid container className="cc-box" justify="center">
						<Box className="fontawesome">{icon}</Box>
					</Grid>
					<Grid container className="cc-box" justify="center">
						<Typography>Temperature: </Typography>
					</Grid>
					<Grid container className="cc-box" justify="center">
						<Typography>Chance of snowday: </Typography>
					</Grid>
				</Box>
			</Card>
		</Box>
	);
};
export default card;
