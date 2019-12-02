import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Typography, Grid } from '@material-ui/core'
import "./style.scss";
import Card from "./Card"
import {blue} from "@material-ui/core/colors"

function App() {
	return (
		<Box className="home-page" style={{backgroundColor: blue[500]}}>
			<Box className="next-box" pt={10}>
				<Grid container justify="center" spacing={2}>
					<Grid item>
						<Card temp={100}/>
					</Grid>
					<Grid item>
						<Card/>
					</Grid>
					<Grid item>
						<Card/>
					</Grid>
					<Grid item>
						<Card/>
					</Grid>
					<Grid item>
						<Card/>
					</Grid>
				</Grid>
			</Box>
		</Box>

	);
}

export default App;
