import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import style from "./style";
import ClearIcon from '@material-ui/icons/Clear';
import {Modal,} from "@material-ui/core";
import {connect} from "react-redux";
import { bindActionCreators,compose } from "redux";
import * as modalAction from "./../../actions/modal";
import PropTypes from "prop-types";

class ModalInterface extends Component {
    
    render() {
        const {classes,open,component,modalAction,title} = this.props;
        const {hiddenModal} = modalAction;
        return (
            <div>
                <Modal open={open} onClose={hiddenModal}> 
                    <div  className={classes.modal}>
                        <div className={classes.header}>
                            <span className={classes.title}>{title}</span>
                            <ClearIcon className={classes.icon} onClick={hiddenModal}/>
                        </div>
                        <div className={classes.content}>
                            {component}
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

ModalInterface.propTypes={
    classes:PropTypes.object,
    open:PropTypes.bool,
    close:PropTypes.func,
    modalAction:PropTypes.shape({
        hiddenModal:PropTypes.func,
    }),
    component:PropTypes.object,
    title:PropTypes.string,
}

const mapStateToProps = (state) => {
    return {
      open: state.modal.showModal,
      component:state.modal.components,
      title:state.modal.title,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
    //   taskActionCreator: bindActionCreators(taskAction, dispatch),
      modalAction: bindActionCreators(modalAction, dispatch),
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default  compose(withStyles(style),withConnect)(ModalInterface);