import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import style from "./style";
import {TextField} from '@material-ui/core';
import PropTypes from "prop-types";

class SearchBox extends Component {
    render() {
        const {classes, handleChange} = this.props;
        return (
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField 
                    id="outlined-basic" 
                    variant="outlined"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Nhập từ khóa"
                    size="small"
                     />
                </form>
            </div>
        );
    }
}

SearchBox.propTypes={
    classes:PropTypes.object,
    handleChange:PropTypes.func,
}

export default withStyles(style) (SearchBox);