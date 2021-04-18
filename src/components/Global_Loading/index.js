import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import loading from "../../assets/image/loading.gif";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as uiAction from "../../actions/ui";

class Global_Loading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.wrapper}>
          <img src={loading} alt="loading" className={classes.icon} />
        </div>
      );
    }

    return xhtml;
  }
}

Global_Loading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};
const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiAction: bindActionCreators(uiAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(style), withConnect)(Global_Loading);
