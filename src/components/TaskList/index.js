import { Box,withStyles } from '@material-ui/core';
import TaskItem from '../TaskItem';
import styles from "./style";
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
class TaskList extends Component {
    render() {
        let {task,status} = this.props;
        return (
            <Grid item md={4} xs={12}>
                            <Box component='span' m={1}>
                                <div className='status'>{status.label}</div>
                            </Box>
                            <div className='wrapperlist'>
                                {task.map((task,index)=>{
                                    return(
                                        <TaskItem tasks={task} status={status} key={index}/>
                                    );
                                })}
                            </div>
                        </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);
