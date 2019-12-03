import React from "react";
import "./App.css";
import { Box, Grid, Paper, TextField, Button } from "@material-ui/core";
import "./style.scss";
import Card from "./Card";
import { blue } from "@material-ui/core/colors";
import { useState, useEffect } from "react";
import Header from "./layout/header";
import Axios from "axios";

function App() {
	const [zip, setZip] = useState(11111);
	const [textField, setTextField] = useState(zip);

	const updateText = e => {
		setTextField(e.target.value);
	};

	const updateZip = e => {
		setZip(textField);
	};

	useEffect(() => {
		Axios.get("http://localhost:3001/weather", {
			params: {
				location: "Boston",
			},
		}).then(res => {
			console.log("RES: " + res);
		});
	}, []);

	return (
		<Box className="home-page" style={{ backgroundColor: blue[200] }}>
			{Header}
			<Box className="next-box">
				<Box mb={2}>
					<Grid container justify="center">
						<Grid item lg={2} sm={5} xs={8}>
							<Paper>
								<Box
									m={2}
									p={1}
									display="flex"
									justifyContent="center"
								>
									<TextField
										style={{ width: "80px" }}
										label="Zipcode"
										defaultValue={zip}
										variant="filled"
										onChange={updateText}
									></TextField>
									<Button onClick={updateZip}>Change</Button>
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Box>
				<Grid container spacing={2} justify="center">
					<Grid item xs={12} sm={8} md={2}>
						<Card temp={100} />
					</Grid>
					<Grid item xs={12} sm={8} md={2}>
						<Card />
					</Grid>
					<Grid item xs={12} sm={8} md={2}>
						<Card />
					</Grid>
					<Grid item xs={12} sm={8} md={2}>
						<Card />
					</Grid>
					<Grid item xs={12} sm={8} md={2}>
						<Card />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default App;
