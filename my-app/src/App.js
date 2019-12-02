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

	const changeZip = (n) => {
		console.log(n);
	}

	const updateText = (e) => {
		setTextField(e.target.value);
	}

	const updateZip = (e) => {
		setZip(textField);
	}

	return (
		<Box className="home-page" style={{ backgroundColor: blue[200] }}>
			<Box className="next-box" pt={10}>
				<Paper>
					<Box flex justifyContent="center">
						<Typography>Zipcode: {zip}</Typography>
						<TextField onChange={updateText}></TextField>
						<Button onClick={updateZip}>Change</Button>
					</Box>
				</Paper>
				<Grid container justify="center" spacing={2}>
					<Grid item>
						<Card temp={100} />
					</Grid>
					<Grid item>
						<Card />
					</Grid>
					<Grid item>
						<Card />
					</Grid>
					<Grid item>
						<Card />
					</Grid>
					<Grid item>
						<Card />
					</Grid>
				</Grid>
			</Box>
		</Box>

	);
}

export default App;
