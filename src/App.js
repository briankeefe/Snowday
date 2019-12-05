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
	const [theText, setTheText] = useState("");
	const [nextSnow, setNextSnow] = useState(0);
	const [city, setCity] = useState();
	const [weatherCode, setWeatherCode] = useState();
	const [desc, setDesc] = useState();

	const updateText = e => {
		setTheText(e.target.value);
	};

	const updateZip = () => {
		setZip(theText);
		call(theText);
	};

	const call = code => {
		Axios.get("http://localhost:3001/snow", {
			params: {
				zip: code
			}
		}).then(res => {
			console.log(res.data);
			if (!res.data.snow) {
				setNextSnow(0);
			} else {
				console.log(res.data.snow);
				setNextSnow(res.data.snow["1h"]);
			}
			setTheText("");
			if (res.data["weather"]) {
				setCity(res.data.name);
				setWeatherCode(res.data["weather"][0]["id"]);
				setDesc(res.data["weather"][0]["description"]);
			} else {
				alert("INVALID ZIP!");
			}
		});
	};
	useEffect(() => {
		call(DEFAULTLOC);
		//setTextCode(DEFAULTLOC);
	}, []);

	return (
		<Box className="home-page" style={{ backgroundColor: blue[100] }}>
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
										{city}
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
										value={theText}
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
						<Card
							desc={desc}
							code={weatherCode}
							city={city}
							snow={nextSnow}
						/>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default App;
