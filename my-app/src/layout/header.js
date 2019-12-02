import React from "react";
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const toolbar = (
	<AppBar position="static">
		<Toolbar>
			<IconButton edge="start" color="inherit" aria-label="menu">
				<MenuIcon />
			</IconButton>
			<Typography variant="h6">
				Snowday Calculator 2.0
          	</Typography>
		</Toolbar>
	</AppBar>
);

export default toolbar;