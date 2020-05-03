import React, { Component } from 'react';
import styles from './styles';

import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TaskItem from '../TaskItem';



class TaskList extends Component {
    render() {
        const { classes, status, tasks } = this.props;
        return (
            <Grid item md={4} xs={12}>
                <Box mt={1} mb={1}>
                    <div className={ classes.status } >
                        { status.label }
                    </div>
                </Box>

                <div className={ classes.wrapperListTask } >
                    {
                        tasks.map((task, index) => {
                            // const { title, description } = task;
                            return (
                                <TaskItem key = { index } 
                                    task = { task } 
                                    status = { status } 
                                />
                            )
                        })
                    }
                </div>
            </Grid>
        )
    }
}

export default withStyles(styles)(TaskList);