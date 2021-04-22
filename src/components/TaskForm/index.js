import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./style";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Modal, Grid, Box  } from "@material-ui/core";
import PropTypes from "prop-types";
class TaskForm extends Component {
  render() {
    const { open, close, classes } = this.props;
    return (
      <Modal open={open} onClose={close}>
      <div  className={classes.modal}>
          <form>
            <Grid container spacing={8}>
              <Grid item md={12}>
                <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Tiêu đề"
                type="email"
                fullWidth
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Mô tả"
                type="email"
                fullWidth
                multiline
                />
              </Grid>
              <Grid item md={12}>
                <Box display="flex" flexDirection="row-reverse" mt={1}>
                  <Button color="primary" variant="contained"> Lưu lại</Button>
                  <Box mr={1}>
                    <Button color="default" onClick={close} variant="contained"> Hủy </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes={
  open:PropTypes.bool,
  close:PropTypes.func,
  classes:PropTypes.object,
}

export default withStyles(styles)(TaskForm);
