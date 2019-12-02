import React from "react";
import { Box, Card, Typography, Grid, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from "@fortawesome/free-solid-svg-icons";
const card = () => {
    return (
        <Box>
            <Card className="component-card">
                <Grid container className="cc-box" justify="center">
                    <Typography>Weather Text</Typography>
                </Grid>
                <Grid container className="cc-box" justify="center">
                    <FontAwesomeIcon className="icon" icon={faBolt}></FontAwesomeIcon>
                </Grid>
                <Grid container className="cc-box" justify="center">
                    <Typography>Temperature: </Typography>
                </Grid>
                <Grid container className="cc-box" justify="center">
                    <Typography>Chance of snowday: </Typography>
                </Grid>
            </Card>
        </Box>
    )


}
export default card;