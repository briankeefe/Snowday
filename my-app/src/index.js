import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple, green, blue } from '@material-ui/core/colors';
import { faFastForward } from '@fortawesome/free-solid-svg-icons';
import { AppBar, Toolbar, Box, Typography, Button } from '@material-ui/core';
const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: green,
	}
});

const routing = (
	<Box className="outermost">
		<ThemeProvider theme={theme}>
			<Router>
				<div>
					<Route path="/" component={App} />
					<Route path="/today" component={App} />
					<Route path="/tomorrow" component={App} />
				</div>
			</Router>
		</ThemeProvider>
	</Box>

)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
