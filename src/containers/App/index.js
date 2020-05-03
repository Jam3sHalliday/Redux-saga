import React, { Component } from 'react';

import styles from './styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';

import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';

const store = configureStore()

class App extends Component {
    render() {
        // const { classes } = this.props;
        return (
            <Provider store = { store }>
                <ThemeProvider theme={theme}>
                    <ToastContainer />
                    <GlobalLoading />
                    <Taskboard />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
