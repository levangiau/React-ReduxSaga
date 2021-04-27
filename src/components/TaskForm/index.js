import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./style";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import { Grid, Box  } from "@material-ui/core";
import { bindActionCreators,compose } from "redux";
import {connect} from "react-redux";
import * as modalAction from "./../../actions/modal";
import PropTypes from "prop-types";
import { Field, reduxForm } from 'redux-form'
import renderTextField from "./../../helpers/formHelper/Textfile";

class TaskForm extends Component {
  handleSubmitForm=data=>{
    console.log(data,'ss')
  }
  render() {
    const {modalActionCreator,handleSubmit} = this.props;
    const {hiddenModal} = modalActionCreator;
    return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
              <Grid container spacing={8}>
                <Grid item md={12}>
                 {/*<TextField
                  autoFocus
                  margin="dense"
                  id="title"
                  label="Tiêu đề"
                  type="email"
                  fullWidth
                  />*/} 
                  <Field
                  id='title'
                  label="Tiêu đề"
                  // className={classes.textfield}
                  margin="normal"
                  name='title'
                  component={renderTextField}
                  />
                </Grid>
                <Grid item md={12}>
                  {/*<TextField
                  autoFocus
                  margin="dense"
                  id="description"
                  label="Mô tả"
                  type="email"
                  fullWidth
                  multiline
                  />*/}
                  <Field
                  margin="dense"
                  id="description"
                  label="Mô tả"
                  name='description'
                  component={renderTextField}
                  multiple
                  />
                </Grid>
                <Grid item md={12}>
                  <Box display="flex" flexDirection="row-reverse" mt={1}>
                    <Button color="primary" variant="contained" type="submit"> Lưu lại</Button>
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
  }),
  handleSubmit:PropTypes.func,
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

const FORM_NAME="FORM_NAME";

const withReduxForm = reduxForm({
  form:FORM_NAME
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
  )
  (TaskForm);
