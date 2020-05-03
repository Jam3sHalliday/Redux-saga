import React, { Component } from 'react';
import styles from './styles';

import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class TaskItem extends Component {
    render() {
        const { classes, task, status } = this.props;
        // const { id, title } = task
        return (
            <Card key={task.id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">
                                {task.title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            { status.label}
                        </Grid>
                    </Grid>
                    <p>
                        { task.description }
                    </p>
                </CardContent>
                <CardActions className = { classes.cardActions }>
                    <Fab size = "small" color = "primary" aria-label = "Edit" className = { classes.fab }>
                        <EditIcon fontSize = "small">
                            edit_icon
                        </EditIcon>
                    </Fab>

                    <Fab size = "small" color = "primary" aria-label = "Edit" className = { classes.fab }>
                        <DeleteIcon fontSize = "small">
                            delete_icon
                        </DeleteIcon>
                    </Fab>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(TaskItem);