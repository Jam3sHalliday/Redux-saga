import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props;
        return (
            <form className = { classes.name } noValidate autoComplete = "off">
                <TextField 
                    autoComplete = "off"
                    className = { classes.textField }
                    onChange = { handleChange }
                    margin = "normal"
                    placeholder = "Input key word"
                />
            </form>
        );
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func,
}

export default withStyles(styles)(SearchBox);