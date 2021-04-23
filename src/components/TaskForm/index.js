import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./style";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid, Box  } from "@material-ui/core";
import { bindActionCreators,compose } from "redux";
import {connect} from "react-redux";
import * as modalAction from "./../../actions/modal";
import PropTypes from "prop-types";

class TaskForm extends Component {
  render() {
    const {modalActionCreator} = this.props;
    const {hiddenModal} = modalActionCreator;
    return (
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
                      <Button 
                      color="default" 
                      onClick={hiddenModal} 
                      variant="contained"> Hủy </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </form> 
    );
  }
}

TaskForm.propTypes={
  modalActionCreator:PropTypes.shape({
    hiddenModal:PropTypes.func,
  })
}

const mapStateToProps=state=>{
  return{

  }
}

const mapDispatchToProps=dispatch=>{
  return{
    modalActionCreator:bindActionCreators(modalAction,dispatch)
  }
}

const withConnect=connect(mapStateToProps,mapDispatchToProps);

export default compose(withStyles(styles),withConnect)(TaskForm);
