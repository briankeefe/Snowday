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
  const [zip, setZip] = useState("01772");
  const [theText, setTheText] = useState(zip);
  const [nextSnow, setNextSnow] = useState(0);

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
    }).then(res => {
      if (!res.data.snow) {
        setNextSnow(0);
      } else {
        setNextSnow(res.data.snow["1h"]);
      }
    });
  };
  useEffect(() => {
    call();
  }, []);

  return (
    <Box className="home-page" style={{ backgroundColor: blue[200] }}>
      {Header}
      <Box className="next-box">
        <Box mb={2}>
          <Grid container justify="center">
            <Grid item lg={2} sm={3} xs={8}>
              <Paper>
                <Box m={2} p={1} display="flex" justifyContent="center">
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
            <Card snow={nextSnow} temp={100} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
