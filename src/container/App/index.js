import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./style";
import { withStyles } from "@material-ui/core";

function App(props) {
  console.log("props", props);
  const { classes } = props;
  return (
    <div className="App">
      <h1>Hello Redux-Saga</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <div className={classes.box}>
        <div className={classes.shape}>Disneyland</div>
        <div className={classes.shape}>Zoo</div>
        <div className={classes.shape}>Hornor</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
