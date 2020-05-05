import React, { Component } from 'react';
import styles from './styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import ClearIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';

import { withStyles, Grid, Box } from '@material-ui/core';

class TaskForm extends Component {
    render() {
        const { classes } = this.props;
        return (
            <form action="">
                <Grid container>
                    <Grid item md = {12}>
                        <TextField 
                            id = "standard-name"
                            label = "Title"
                            className = { classes.textField }
                            margin = "normal"
                        />
                    </Grid>
                    <Grid item md = {12}>
                        <TextField 
                            id = "standard-multiline-flexible"
                            label = "Description"
                            multiline
                            rowsMax = "4"
                            className = { classes.textField }
                            margin = "normal"
                        />
                    </Grid>
                    <Grid item md = {12} >
                        <Box m = { 2 } display = "flex" flexDirection="row-reverse" >
                            <Box ml = { 1 }>
                                <Button variant ="contained" 
                                    color = "primary" >
                                    Cancle
                                </Button>
                            </Box>
                            <Button  variant ="contained" 
                                color = "primary"
                            >
                                Save
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
};

TaskForm.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(TaskForm);