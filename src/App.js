import React from "react";
import "./App.css";
import {
	Box,
	Grid,
	Paper,
	TextField,
	Button,
	Typography
} from "@material-ui/core";
import "./style.scss";
import Card from "./Card";
import { blue } from "@material-ui/core/colors";
import { useState, useEffect } from "react";
import Header from "./layout/header";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationArrow,
	faMapMarker
} from "@fortawesome/free-solid-svg-icons";

const DEFAULTLOC = "01772";

function App() {
	const [zip, setZip] = useState(DEFAULTLOC);
	const [theText, setTheText] = useState(zip);
	const [nextSnow, setNextSnow] = useState(0);
	const [textCode, setTextCode] = useState(DEFAULTLOC);
	const [city, setCity] = useState();

	const updateText = e => {
		setTheText(e.target.value);
	};

	const updateZip = () => {
		setZip(theText);
		call(theText);
	};

	const call = code => {
		Axios.get("http://localhost:3001/weather", {
			params: {
				zip: code
			}
		})
			.then(res => {
				console.log(res.data);
				if (!res.data.snow) {
					setNextSnow(0);
				} else {
					console.log(res.data.snow);
					setNextSnow(res.data.snow["1h"]);
				}
				setCity(res.data.name);
			})
			.then(() => {
				setTextCode(code);
			});
	};
	useEffect(() => {
		call(DEFAULTLOC);
		//setTextCode(DEFAULTLOC);
	}, []);

	return (
		<Box className="home-page" style={{ backgroundColor: blue[200] }}>
			{Header}
			<Box className="next-box">
				<Box mb={2}>
					<Grid container justify="center">
						<Grid item lg={3} md={4} sm={5} xs={10}>
							<Paper>
								<Box
									mt={2}
									pt={2}
									display="flex"
									justifyContent="center"
								>
									<FontAwesomeIcon icon={faMapMarker} />
									<Typography style={{ marginLeft: "8px" }}>
										{textCode}
									</Typography>
								</Box>
								<Box
									m={2}
									mt={0}
									p={1}
									display="flex"
									justifyContent="center"
								>
									<TextField
										className="text-input"
										label="Zipcode"
										variant="outlined"
										onChange={updateText}
									></TextField>
									<Button
										className="change-button"
										variant="contained"
										color="primary"
										onClick={updateZip}
									>
										Change
									</Button>
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Box>
				<Grid container spacing={2} justify="center">
					<Grid item xs={12} sm={8} md={3}>
						<Card city={city} snow={nextSnow} />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default App;
