import React, { Component } from 'react';
import styles from './styles'
import './stylesLoading.css';
import { withStyles } from '@material-ui/styles'
// import LoadingIcon from '../../assets/img/Spinner-Preloader.gif';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as uiActions from '../../actions/ui'

class GlobalLoading extends Component {
    render() {
        const { classes, showLoading } = this.props;

        let xhtml = null;
        if(showLoading) {
            xhtml = (
                <div className={ classes.globalLoading} >
                    {/* <img className = { classes.icon } src= { LoadingIcon } alt="loading Gif"/> */}
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            )
        }
        return xhtml;
    }
}

GlobalLoading.propTypes = {
    classes: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        showLoading: state.ui.showLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        uiActions: bindActionCreators(uiActions, dispatch),
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose (
    withStyles(styles),
    withConnect,
)(GlobalLoading);