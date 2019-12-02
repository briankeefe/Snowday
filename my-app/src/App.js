import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Typography, Grid, Paper, TextField, Button } from '@material-ui/core'
import "./style.scss";
import Card from "./Card"
import { blue } from "@material-ui/core/colors";
import { useState } from "react";

function App() {
	const [zip, setZip] = useState(11111);
	const [textField, setTextField] = useState(zip);

	const updateText = (e) => {
		setTextField(e.target.value);
	}

	const updateZip = (e) => {
		setZip(textField);
	}

	return (
		<Box className="home-page" style={{ backgroundColor: blue[200] }}>
			<Box className="next-box">
				<Box mb={2} mx={10}>
					<Grid container justify="center">
						<Grid item lg={4} sm={6} xs={12}>
							<Paper>
								<Box m={2} p={1} display="flex" justifyContent="center">
									<TextField label="Zipcode" defaultValue={zip} variant="filled" onChange={updateText}></TextField>
									<Button onClick={updateZip}>Change</Button>
								</Box>
							</Paper>
						</Grid>

					</Grid>
				</Box>
				<Grid container spacing={2} justify="center">
					<Grid item xs={12} sm={2}>
						<Card temp={100} />
					</Grid>
					<Grid item xs={12} sm={2}>
						<Card />
					</Grid>
					<Grid item xs={12} sm={2}>
						<Card />
					</Grid>
					<Grid item xs={12} sm={2}>
						<Card />
					</Grid>
					<Grid item xs={12} sm={2}>
						<Card />
					</Grid>
				</Grid>
			</Box>
		</Box>

	);
}

export default App;
