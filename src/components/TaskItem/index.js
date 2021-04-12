import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './style';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
class TaskItem extends Component {
    render() {
        let {tasks,status,classes}=this.props;
        return (
            <Card>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component='h2'>{tasks.title}</Typography>
                        </Grid>
                        <Grid item md={4}>{status.label}</Grid>
                    </Grid>
                    <Typography component='p'>{tasks.description}</Typography>
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <Fab color="primary" aria-label="add" size="small">
                        <EditIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="add" size="small">
                        <DeleteIcon />
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);
